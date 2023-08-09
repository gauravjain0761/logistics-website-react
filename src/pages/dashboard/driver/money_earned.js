import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import AuthGuard from "@/auth/AuthGuard";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";

const MoneyEarnedList = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <Box mt={2} mb={4}>
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
    </AuthGuard>
  );
};

MoneyEarnedList.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MoneyEarnedList;
