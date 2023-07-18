import { PrimaryWebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { isEqual } from "lodash";
import { useSnackbar } from "notistack";
import React from "react";

const RegisterPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpenClose = () => {
    setOpen(!open);
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_type: "customer",
      email: "",
      mobile: "",
      term: "no",
      password: "",
      password_confirmation: "",
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

      if (!values.term) {
        errors.term = "T&C is required";
      }

      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      await axiosInstance
        .post("/api/user/customer-register", values, { setErrors })
        .then((response) => {
          if (response?.status === 200) {
            handleOpenClose();
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            formik.resetForm();
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
    <Register open={open} handleOpenClose={handleOpenClose} formik={formik} />
  );
};

RegisterPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default RegisterPage;
