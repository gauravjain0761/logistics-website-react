import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from "@/sections/dashboard/customerDashboard/jobPost";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import DashboardCard from "@/module/dashboard/customerCard/dashboardCard";

const MoneySpendList = () => {
  const formik = useFormik({});
  return (
    <Box mt={10} mb={4}>
      <Container maxWidth>
        <Box py={5}>
          <DashboardCard />
        </Box>
        <Card>
          <CardContent>
            <Typography variant="h3" component="h3" textAlign="center">
              This Page is under development
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

MoneySpendList.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MoneySpendList;
