import { PrimaryWebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import React from "react";
import { useSnackbar } from "notistack";
import GuestGuard from "@/auth/GuestGuard";

const LoginPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  
  return (
    <GuestGuard>
      <Login formik={formik} />
    </GuestGuard>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default LoginPage;
