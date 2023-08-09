import React from "react";
import { PrimaryWebLayout } from "@/layout";
import JobHistory from "@/sections/dashboard/companyDashboard/jobhistory";

const JobHistoryPage = () => {

  return <JobHistory />;
};

JobHistoryPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobHistoryPage;
