import AuthGuard from "@/auth/AuthGuard";
import { PrimaryWebLayout } from "@/layout";
import CustomerDashboard from "@/sections/dashboard/customerDashboard";
import { useFormik } from "formik";

const DashboardPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <CustomerDashboard formik={formik} />
    </AuthGuard>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
