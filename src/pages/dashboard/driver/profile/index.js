import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import Profile from "@/sections/myProfile";
import AuthGuard from "@/auth/AuthGuard";

const MyProfilePage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <Profile formik={formik} />
    </AuthGuard>
  );
};

MyProfilePage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MyProfilePage;
