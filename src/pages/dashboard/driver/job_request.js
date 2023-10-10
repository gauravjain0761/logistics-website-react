import AuthGuard from "@/auth/AuthGuard";
import { PrimaryWebLayout } from "@/layout";
import DashboardJobRequest from "@/sections/dashboard/driverDashboard/jobRequest";
import { useFormik } from "formik";

const JobRequestPage = () => {
  const formik = useFormik({});

  console.log("formikformik", formik);
  return (
    <AuthGuard>
      <DashboardJobRequest formik={formik} />
    </AuthGuard>
  );
};

JobRequestPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobRequestPage;
