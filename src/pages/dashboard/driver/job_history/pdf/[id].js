import AuthGuard from "@/auth/AuthGuard";
import { PrimaryWebLayout } from "@/layout";
import ViewHistoryPDF from "@/sections/dashboard/driverDashboard/jobHistory/pdf";

const ViewJobPage = () => {
  return (
    <AuthGuard>
      <ViewHistoryPDF />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
