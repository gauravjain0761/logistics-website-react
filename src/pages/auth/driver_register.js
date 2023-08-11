import GuestGuard from "@/auth/GuestGuard";
import { PrimaryWebLayout } from "@/layout";
import DriverRegister from "@/sections/auth/driver_register";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const DriverPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpenClose = () => {
    setOpen(!open);
  };
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_type: "driver",
      email: "",
      driver_type: "individual",
      mobile: "",
      term: "no",
      password: "",
      password_confirmation: "",
      company_certificate: "",
      company_certificate_url: "",
      company_vat: "",
      company_vat_url: "",
    },
    validate: (values) => {
      const errors = {};
      const passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

      if (!values.user_name) {
        errors.user_name = "User name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.mobile) {
        errors.mobile = "Phone is required";
      } else if (!/^[0-9]{10}$/.test(values.mobile)) {
        errors.mobile = "Please enter valid number";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (!passwordRegex.test(values.password)) {
        errors.password =
          "Min 8 letter password, with at least a symbol, upper and lower case letters and a number";
      }

      if (!values.password_confirmation) {
        errors.password_confirmation = "Confirm password is required";
      } else if (!passwordRegex.test(values.password_confirmation)) {
        errors.password_confirmation =
          "Min 8 letter password, with at least a symbol, upper and lower case letters and a number";
      } else if (
        values.password &&
        values.password_confirmation &&
        values.password != values.password_confirmation
      ) {
        errors.password_confirmation = "Password didn't match.";
      }

      if (values.term == "no") {
        errors.term = "T&C is required";
      }

      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      let url, formData;
      if (values.user_type === "driver") {
        url = "api/user/driver-register";
        formData = {
          user_name: values?.user_name,
          user_type: values?.user_type,
          email: values?.email,
          mobile: values?.mobile,
          driver_type: values?.driver_type,
          term: values?.term,
          password: values?.password,
          password_confirmation: values?.password_confirmation,
        };
      } else {
        url = "/api/user/company-register";
        let formDatas = new FormData();
        formDatas.append("user_name", values?.user_name);
        formDatas.append("user_type", values?.user_type);
        formDatas.append("email", values?.email);
        formDatas.append("mobile", values?.mobile);
        formDatas.append("term", values?.term);
        formDatas.append("password", values?.password);
        formDatas.append(
          "password_confirmation",
          values?.password_confirmation
        );
        formDatas.append("company_certificate", values?.company_certificate);
        formDatas.append("company_vat", values?.company_vat);
        formData = formDatas;
      }
      await axiosInstance
        .post(url, formData, { setErrors })
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            // handleOpenClose();
            formik.resetForm();
            router.push("/auth/login");
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
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

  return (
    <GuestGuard>
      <DriverRegister
        open={open}
        handleOpenClose={handleOpenClose}
        formik={formik}
      />
    </GuestGuard>
  );
};

DriverPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DriverPage;
