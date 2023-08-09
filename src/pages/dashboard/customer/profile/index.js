import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import Profile from "@/sections/myProfile";
import axiosInstance from "@/utils/axios";
import AuthGuard from "@/auth/AuthGuard";

const MyProfilePage = () => {
  const [data, setData] = React.useState({});
  const formik = useFormik({
    initialValues: {},
    validate: (values) => {},
    onSubmit: (values) => {},
  });

  const getProfile = async () => {
    await axiosInstance.get("api/auth/profile/my-profile").then((response) => {
      if (response.status === 200) {
        setData(response?.data?.view_data);
      }
    });
  };
  React.useEffect(() => {
    getProfile();
  }, []);
  console.log("datadata", data);
  return (
    <AuthGuard>
      <Profile formik={formik} data={data} />
    </AuthGuard>
  );
};

MyProfilePage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MyProfilePage;
