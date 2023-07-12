import React from 'react'
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
const Job_post = () => {
  return (
    <React.Fragment>
        <Container sx={{ my: 4 }}>
        <Stack spacing={4}>
          <Box>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Card sx={{ backgroundColor: "#ff7534" }}>
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      spacing={1}
                    >
                      <Box
                        sx={{ backgroundColor: "#fff" }}
                        height="60px"
                        px={1.3}
                        py={0.8}
                        borderRadius={2}
                        component={"img"}
                        src="/assets/images/dashboard/jobposted.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
                          JOB POSTED
                        </Typography>
                        <Typography
                          variant="h4"
                          color={"#fff"}
                          textAlign={"center"}
                        >
                          2
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ backgroundColor: "#ff7534" }}>
                  <CardContent>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Box
                        sx={{ backgroundColor: "#fff" }}
                        height="60px"
                        px={1.3}
                        py={0.8}
                        borderRadius={2}
                        component={"img"}
                        src="/assets/images/dashboard/moneyspend.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
                          MONEY SPEND
                        </Typography>
                        <Typography
                          variant="h4"
                          color={"#fff"}
                          textAlign={"center"}
                        >
                          $ 20000
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ backgroundColor: "#ff7534" }}>
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      spacing={2}
                    >
                      <Box
                        sx={{ backgroundColor: "#fff" }}
                        height="60px"
                        px={1.3}
                        py={0.8}
                        borderRadius={2}
                        component={"img"}
                        src="/assets/images/dashboard/jobhistory.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
                          JOB HISTORY
                        </Typography>
                        <Typography
                          variant="h4"
                          color={"#fff"}
                          textAlign={"center"}
                        >
                          20
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ backgroundColor: "#ff7534" }}>
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      spacing={2}
                    >
                      <Box
                        sx={{ backgroundColor: "#fff" }}
                        height="60px"
                        px={1.3}
                        py={0.8}
                        borderRadius={2}
                        component={"img"}
                        src="/assets/images/dashboard/subscription.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
                          SUBSCRIPTION
                        </Typography>
                        <Typography
                          variant="h4"
                          color={"#fff"}
                          textAlign={"center"}
                        >
                          3 Month
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box>
           <Card>
            <CardContent>
              
            </CardContent>
           </Card>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default Job_post