import GuestGuard from "@/auth/GuestGuard";
import { useAuthContext } from "@/auth/useAuthContext";
import { PrimaryWebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const RegisterPage = () => {
  const router = useRouter();
  const { register } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpenClose = () => {
    setOpen(!open);
  };

  const sendOtp = async (values) => {
    await axiosInstance
      .post("api/user/send-otp", values)
      .then((response) => {
        if (response?.status === 200) {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
        } else {
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        const { response } = error;
        let status = [406, 404];
        if (status.includes(response?.status)) {
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        }
      });
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

      if (values.user_type === "company" && !values.company_certificate) {
        errors.company_certificate = "Company Certificate is required";
      }
      if (values.user_type === "company" && !values.company_vat) {
        errors.company_vat = "Company Vat is required";
      }

      if (values.term == "no") {
        errors.term = "T&C is required";
      }

      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      let url, formData;

      if (values.user_type === "customer") {
        url = "/api/user/cust-register";
        let customerData = new FormData();
        customerData.append("user_name", values?.user_name);
        customerData.append("user_type", values?.user_type);
        customerData.append("email", values?.email);
        customerData.append("mobile", values?.mobile);
        customerData.append("term", values?.term);
        customerData.append("password", values?.password);
        customerData.append(
          "password_confirmation",
          values?.password_confirmation
        );
        formData = customerData;
      } else {
        url = "/api/user/company-register";
        let companyData = new FormData();
        companyData.append("user_name", values?.user_name);
        companyData.append("user_type", values?.user_type);
        companyData.append("email", values?.email);
        companyData.append("mobile", values?.mobile);
        companyData.append("term", values?.term);
        companyData.append("password", values?.password);
        companyData.append(
          "password_confirmation",
          values?.password_confirmation
        );
        companyData.append("company_certificate", values?.company_certificate);
        companyData.append("company_vat", values?.company_vat);
        formData = companyData;
      }
      await axiosInstance
        .post(url, formData)
        .then((response) => {
          if (response?.status === 200) {
            formik.resetForm();
            router.push("/auth/login");
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
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
      <Register open={open} handleOpenClose={handleOpenClose} formik={formik} />
    </GuestGuard>
  );
};

RegisterPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default RegisterPage;
