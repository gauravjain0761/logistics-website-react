import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import Profile from "@/sections/myProfile";
import axiosInstance from "@/utils/axios";
import AuthGuard from "@/auth/AuthGuard";
import { useSnackbar } from "notistack";

const MyProfilePage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState({});
  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      phone: "",
      profile_img: "",
    },
    validate: (values) => {},
    onSubmit: async (values) => {
      await axiosInstance
        .post("/api/auth/profile/update-profile", values)
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            getProfile();
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            console.log("response", response.data.error);
            // eslint-disable-next-line no-unused-vars
            for (const [key] of Object.entries(values)) {
              if (response.data.error[key]) {
                setErrors({ [key]: response.data.error[key][0] });
              }
            }
          }
          if (response?.data?.status === 406) {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        });
    },
  });

  async function getProfile() {
    setLoader(true);
    await axiosInstance
      .get("api/auth/profile/my-profile")
      .then((response) => {
        if (response.status === 200) {
          setLoader(false);
          setData(response?.data?.view_data);
          let newData = response?.data?.view_data;
          console.log("newDatanewData", newData);
          for (const [key] of Object.entries(formik.values)) {
            if (key == "user_name") {
              formik.setFieldValue("user_name", newData?.profile?.user_name);
            } else if (key == "email") {
              formik.setFieldValue("email", newData?.email);
            } else if (key == "mobile") {
              formik.setFieldValue("mobile", newData?.mobile);
            } else if (key == "profile_img") {
              formik.setFieldValue(
                "profile_img",
                `${newData?.profile?.base_url}${newData?.profile?.profile_img}`
              );
            }
          }
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("ProfileError", error);
      });
  }
  React.useEffect(() => {
    getProfile();
  }, []);

  console.log("datadata", loader);
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
