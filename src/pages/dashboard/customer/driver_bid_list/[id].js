import AuthGuard from "@/auth/AuthGuard";
import { PrimaryWebLayout } from "@/layout";
import BidList from "@/sections/dashboard/customerDashboard/driverBidList";
import { useFormik } from "formik";

const JobListing = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <BidList formik={formik} />
    </AuthGuard>
  );
};

JobListing.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobListing;
