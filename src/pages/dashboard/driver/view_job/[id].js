import AuthGuard from "@/auth/AuthGuard";
import { PrimaryWebLayout } from "@/layout";
import ViewJobDetail from "@/sections/dashboard/driverDashboard/viewJob";
import { useFormik } from "formik";

const ViewJobPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <ViewJobDetail formik={formik} />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
