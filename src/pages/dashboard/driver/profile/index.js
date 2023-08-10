import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import Profile from "@/sections/myProfile";
import AuthGuard from "@/auth/AuthGuard";
import axiosInstance from "@/utils/axios";

const MyProfilePage = () => {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({});
  const formik = useFormik({
    initialValues: {},
    validate: (values) => {},
    onSubmit: (values) => {},
  });

  const getProfile = async () => {
    setLoader(true);
    await axiosInstance
      .get("api/auth/profile/my-profile")
      .then((response) => {
        if (response.status === 200) {
          setLoader(false);
          setData(response?.data?.view_data);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("ProfileError", error);
      });
  };
  React.useEffect(() => {
    getProfile();
  }, []);
  console.log("datadata", data);

  return (
    <AuthGuard>
      <Profile formik={formik} data={data} loader={loader} />
    </AuthGuard>
  );
};

MyProfilePage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MyProfilePage;
