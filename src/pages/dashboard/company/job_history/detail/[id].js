import { PrimaryWebLayout } from "@/layout";
import AuthGuard from "@/auth/AuthGuard";
import ViewJobHistory from "@/sections/dashboard/companyDashboard/viewJobHistory";

const ViewJobPage = () => {
  return (
    <AuthGuard>
      <ViewJobHistory />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
