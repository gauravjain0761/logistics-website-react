import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DriverDashboard = () => {
  const router = useRouter();
 
  return (
    <React.Fragment>
      <Container sx={{ my: 4,mt:10}}>
        <Stack spacing={4}>
         <DashboardCard/>
          <Box>
           
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default DriverDashboard;
