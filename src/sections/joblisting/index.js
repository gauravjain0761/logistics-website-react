import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import DashboardCard from "@/module/dashboard/dashboardCard";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  DialogContent,
  Divider,
  Drawer,
  Grid,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const JobList = () => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [select, setSelect] = React.useState("new");
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const sortBy = [
    {
      label: "New",
      value: "new",
    },
    {
      label: "Last",
      value: "last",
    },
  ];

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <React.Fragment>
      <Box py={4} sx={{ background: " " }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<Iconify icon="lucide:filter" />}
                    sx={{ mb: 2, px: 2, py: 1 }}
                    onClick={() => setOpen(true)}
                  >
                    Filters
                  </Button>
                </Box>
                <Box>
                  <SelectBox
                    fullWidth
                    size="small"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                    options={sortBy}
                  />
                </Box>
              </Stack>
              <Box>
                <Box mb={2}>
                  <Typography>1249 employers recommended for you</Typography>
                </Box>
                {[...Array(4)].map((elem, index) => {
                  return (
                    <Card
                      key={index}
                      sx={{
                        my: 2,
                        borderRadius: "0px",
                        ":hover": {
                          borderColor: "#ff7534",
                          cursor: "pointer",
                          transition: " all 0.3s ease-in-out",
                        },
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item md={2}>
                            <Box
                              component="img"
                              src="/assets/images/dashboard/portfolio.jpeg"
                              sx={{
                                borderRadius: "50%",
                                border: "3px solid #ff7534",
                              }}
                            />
                          </Grid>
                          <Grid item md={8}>
                            <Stack direction="column">
                              <Box>
                                <Typography
                                  color="primary"
                                  fontSize={14}
                                  fontWeight={600}
                                >
                                  Job Success Rate: 98 %
                                </Typography>
                              </Box>
                              <Box pb={0.3}>
                                <Typography variant="h5" fontWeight={600}>
                                  Mr. Gaurav
                                </Typography>
                              </Box>
                              <Typography fontSize={14}>
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={2}>
                            <Button variant="contained">Apply</Button>
                          </Grid>
                        </Grid>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          pt={2}
                        >
                          <Stack direction="row" spacing={1}>
                            <Chip label="Full-Time" />
                            <Chip label="Remote" />
                          </Stack>
                          <Stack>
                            <Rating value={4} readOnly size="small" />
                          </Stack>
                        </Stack>
                        <Divider sx={{ my: 2 }} />
                        <Box>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="subtitle2">
                              Bid: $500
                            </Typography>
                            <Typography variant="subtitle2">
                              Earned: $30K+
                            </Typography>
                          </Stack>
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
              <Box>
                <Stack alignItems="center" justifyContent="center">
                  <Pagination
                    count={pageCount}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: () => {
                            return (
                              <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                              >
                                <NavigateBeforeIcon />
                              </Stack>
                            );
                          },
                          next: () => {
                            return (
                              <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                              >
                                <NavigateNextIcon />
                              </Stack>
                            );
                          },
                        }}
                        {...item}
                      />
                    )}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box sx={{ position: "sticky", top: 0, display: "block" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14507.386011003215!2d73.68892634999999!3d24.628974799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689852541239!5m2!1sen!2sin"
                  width="600"
                  height="600"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ pt: 4 }}>
          <Typography>Search</Typography>
          <TextBox
            fullWidth
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </DialogContent>
      </Drawer>
    </React.Fragment>
  );
};

export default JobList;
