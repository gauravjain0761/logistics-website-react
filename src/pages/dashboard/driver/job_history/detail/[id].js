import { PrimaryWebLayout } from "@/layout";
import ViewJobHistory from "@/sections/dashboard/driverDashboard/viewJobHistory";
import AuthGuard from "@/auth/AuthGuard";

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
