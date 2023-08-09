import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from "@/sections/dashboard/customerDashboard/jobPost";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

const MoneyEarnedList = () => {
  const formik = useFormik({});
  return (
    <Box mt={10} mb={4}>
      <Container maxWidth>
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

MoneyEarnedList.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MoneyEarnedList;
