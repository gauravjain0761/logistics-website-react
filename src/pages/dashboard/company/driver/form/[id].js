import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import { reject } from "lodash";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import AuthGuard from "@/auth/AuthGuard";
import { useAuthContext } from "@/auth/useAuthContext";
import DriverJobForm from "@/sections/dashboard/companyDashboard/driver/form";

const DriverJob = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      user_id: user?.id,
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
      profile_img: "",
      licence_front: "",
      licence_back: "",
      profile_img_url: "",
      licence_front_url: "",
      licence_back_url: "",
      address_proof: "",
      address_proof_url: "",
      insurance_cert: "",
      insurance_cert_url: "",
      transit_cert: "",
      transit_cert_url: "",
      liability_cert: "",
      liability_cert_url: "",
      vehicle_cert: "",
      vehicle_cert_url: "",
      v5c_cert: "",
      v5c_cert_url: "",
      dvia_cert: "",
      dvia_cert_url: "",
      nationality_cert: "",
      nationality_cert_url: "",
      document: "",
      register_number: "",
    },

    validate: (values) => {
      const errors = {};
      const passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

      if (!values.user_name) {
        errors.user_name = "Full name is required";
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
      if (values?.user_type === "driver") {
        if (!values.profile_img) {
          errors.profile_img = "Driver Photo is required";
        }
        if (!values.licence_front) {
          errors.licence_front = "Driver Licence is required";
        }
        if (!values.licence_back) {
          errors.licence_back = "Driver Licence is required";
        }
        if (!values.address_proof) {
          errors.address_proof = "Address proof is required";
        }
        if (!values.insurance_cert) {
          errors.insurance_cert = "Insurance Certificate is required";
        }
        if (!values.transit_cert) {
          errors.transit_cert = "Transit Certificate is required";
        }
        if (!values.liability_cert) {
          errors.liability_cert = "Liability Certificate is required";
        }
        if (!values.vehicle_cert) {
          errors.vehicle_cert = "Vehicle Certificate is required";
        }
        if (!values.v5c_cert) {
          errors.v5c_cert = "V5C Certificate is required";
        }
        if (!values.dvia_cert) {
          errors.dvia_cert = "Dvia Certificate is required";
        }
        if (!values.nationality_cert) {
          errors.nationality_cert = "Nationality Proof is required";
        }

        if (
          !values.profile_img ||
          !values.licence_front ||
          !values.licence_back ||
          !values.address_proof ||
          !values.insurance_cert ||
          !values.transit_cert ||
          !values.liability_cert ||
          !values.vehicle_cert ||
          !values.v5c_cert ||
          !values.dvia_cert ||
          !values.nationality_cert
        ) {
          errors.document = "Document is required";
        }
      }

      if (values?.user_type === "company") {
        if (!values.company_certificate) {
          errors.company_certificate = "Company Certificate is required";
        }
        if (!values.company_vat) {
          errors.company_vat = "Company Vat is required";
        }
        if (!values.register_number) {
          errors.register_number = "Register Number is required";
        }
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      let url, formData;
      if (id === "create") {
        url = `api/auth/company/add-driver/${user?.id}`;
      } else {
        url = `api/auth/company/update-driver/${id}`;
      }

      let driverFormData = new FormData();
      driverFormData.append("user_name", values?.user_name);
      driverFormData.append("user_type", values?.user_type);
      driverFormData.append("email", values?.email);
      driverFormData.append("mobile", values?.mobile);
      driverFormData.append("term", values?.term);
      driverFormData.append("password", values?.password);
      driverFormData.append("driver_type", values?.driver_type);
      driverFormData.append("user_id", user?.id);
      driverFormData.append(
        "password_confirmation",
        values?.password_confirmation
      );
      driverFormData.append("profile_img", values?.profile_img);
      driverFormData.append("licence_front", values?.licence_front);
      driverFormData.append("licence_back", values?.licence_back);
      driverFormData.append("address_proof", values?.address_proof);
      driverFormData.append("insurance_cert", values?.insurance_cert);
      driverFormData.append("transit_cert", values?.transit_cert);
      driverFormData.append("liability_cert", values?.liability_cert);
      driverFormData.append("vehicle_cert", values?.vehicle_cert);
      driverFormData.append("v5c_cert", values?.v5c_cert);
      driverFormData.append("dvia_cert", values?.dvia_cert);
      driverFormData.append("nationality_cert", values?.nationality_cert);
      formData = driverFormData;

      await axiosInstance
        .post(url, formData, { setErrors })
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            // handleOpenClose();
            formik.resetForm();
            // router.push("/auth/login");
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

  React.useEffect(() => {
    formik.setFieldValue("user_id", user?.id);
  }, [user, user?.id]);

  const bindData = async () => {
    await axiosInstance
      .get(`/api/auth/company/driver/edit/${id}`)
      .then((response) => {
        if (response.status === 200) {
          if (response?.data?.view_data) {
            let newData = response?.data?.view_data;
            for (const [key] of Object.entries(formik.values)) {
              // if (key === "items") {
              //   formik.setFieldValue("items", newData?.items);
              // } else {
              formik.setFieldValue([key], newData[key]);
              // }
            }
          }
        }
      });
  };

  React.useEffect(() => {
    if (id && id !== "create") {
      bindData();
    }
  }, [id]);

  return (
    <AuthGuard>
      <DriverJobForm formik={formik} />
    </AuthGuard>
  );
};

DriverJob.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DriverJob;


