import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
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
  LinearProgress,
  Modal,
  Pagination,
  PaginationItem,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import GoogleMaps from "@/module/map";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import SkeletonLoader from "@/components/skeleton";

const BidList = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [startChat, setStartChat] = React.useState("");
  const handleOpen = () => setStartChat(true);
  const handleClose = () => setStartChat(false);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [select, setSelect] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filterPrice, setFilterPrice] = useState(10);
  const [loading, setLoading] = useState(false);
  const sortBy = [
    {
      label: "Sort(Default)",
      value: 0,
    },
    {
      label: "Sort(New)",
      value: "new",
    },
    {
      label: "Sort(Last)",
      value: "last",
    },
  ];
  const { enqueueSnackbar } = useSnackbar();

  // Api Fetch
  const fetchApi = async () => {
    await axiosInstance
      .get(`api/auth/jobs/job-bids/${router.query.id}`)
      .then((response) => {
        setLoading(true);
        if (response.status === 200) {
          setLoading(false);
          setData(response.data?.view_data);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    if (router.query.id) {
      fetchApi();
    }
  }, [router.query.id]);

  // Accept Bid Api
  const fetchBidApi = async (id) => {
    await axiosInstance
      .get(`api/auth/jobs/accept-bid/${id}`)
      .then((response) => {
        if (response.status === 200) {
          router.push("/dashboard/customer/job_posted");
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
        } else {
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Bid Api End

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleInputChange = (event) => {
    setFilterPrice(event.target.value);
  };

  return (
    <React.Fragment>
      <Box py={4} sx={{ mt: 10 }} pb={12}>
        <Container>
          <Grid container spacing={2}>
            {loading ? (
              <Grid item md={6}>
                <SkeletonLoader />
              </Grid>
            ) : (
              <Grid item md={6}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography fontSize={28} color="primary" fontWeight={600}>
                      Applied Bids
                    </Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box>
                      <SelectBox
                        fullWidth
                       
                        size="small"
                        color="#fff"
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                        options={sortBy}
                      />
                    </Box>
                    <Box onClick={() => setOpen(true)}>
                      <Iconify
                        icon="lucide:filter"
                        width={30}
                        color={(theme) => theme.palette.primary.main}
                      />
                    </Box>
                  </Stack>
                </Stack>
                <Box>
                  {data &&
                    data.length > 0 &&
                    data.map((elem, index) => {
                      return (
                        <Box key={index}>
                          <Divider sx={{ my: 2 }} />

                          <Grid container spacing={2}>
                            <Grid item md={2}>
                              <Box
                                component="img"
                                alt={elem?.driver?.profile_img}
                                src={`${elem?.driver?.base_url}${elem?.driver?.profile_img}`}
                                sx={{
                                  borderRadius: "50%",
                                  width: "65px",
                                  objectFit: "cover",
                                  height: "65px",
                                  border: "1px solid #f2f2f2",
                                }}
                              />
                            </Grid>
                            <Grid item md={10}>
                              <Stack direction="column">
                                <Box pb={0.3}>
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                  >
                                    <Box>
                                      <Typography
                                        fontSize={16}
                                        fontWeight={500}
                                      >
                                        {elem?.driver?.user_name}
                                      </Typography>
                                    </Box>
                                    <Box>
                                      <Typography
                                        fontSize={16}
                                        fontWeight={600}
                                      >
                                        ${elem?.ammount}
                                      </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={1}>
                                      <Button
                                        sx={{
                                          cursor:
                                            elem?.status === 4
                                              ? "not-allowed"
                                              : "pointer",
                                        }}
                                        icon={
                                          <Iconify icon="material-symbols:check-circle" />
                                        }
                                        // disabled={elem?.status === 4}
                                        variant="contained"
                                        onClick={() =>
                                          elem?.status !== 1 &&
                                          elem?.status !== 4 &&
                                          setStartChat(elem?.id)
                                        }
                                      >
                                        {elem?.status === 1
                                          ? "Accepted"
                                          : elem?.status === 4
                                          ? "Declined"
                                          : "Accept"}
                                      </Button>
                                    </Stack>
                                  </Stack>
                                </Box>
                                <Box>
                                  <Rating
                                    value={4}
                                    readOnly
                                    size="small"
                                    sx={{
                                      color: "#FBBC04",
                                    }}
                                  />
                                </Box>
                              </Stack>
                            </Grid>
                          </Grid>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            pt={2}
                          >
                            <Stack>
                              <Stack direction="row" spacing={0.4}>
                                <Box>
                                  <Typography
                                    color="#5D5D5D"
                                    fontSize={14}
                                    fontWeight={400}
                                  >
                                    Job Success Rate :
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography
                                    color="#5D5D5D"
                                    fontSize={14}
                                    fontWeight={600}
                                  >
                                    78 %
                                  </Typography>
                                </Box>
                              </Stack>
                              <Box>
                                <LinearProgress
                                  variant="determinate"
                                  value={78}
                                />
                              </Box>
                            </Stack>
                            <Stack>
                              <Typography fontSize={14} fontWeight={500}>
                                Earned: $30K+
                              </Typography>
                            </Stack>
                          </Stack>
                          <Divider sx={{ my: 2 }} />
                        </Box>
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
            )}

            <Grid item md={6}>
              <Box sx={{ position: "sticky", top: 75, display: "block" }}>
                <GoogleMaps />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ pt: 4 }}>
          <Stack direction="column" spacing={2}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Search
                </Typography>
                <TextBox
                  fullWidth
                  size="small"
                  value={search}
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>
              <Box>
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    Price : ${filterPrice}
                  </Typography>
                </Box>
                <Slider
                  size="large"
                  value={typeof filterPrice === "number" ? filterPrice : 0}
                  onChange={handleInputChange}
                />
              </Box>
              <Box>
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    Rating
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Rating
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </DialogContent>
        <Stack direction="column" spacing={1} p={2}>
          <Button variant="contained" fullWidth>
            Apply
          </Button>
          <Button variant="outlined" fullWidth>
            Clear All
          </Button>
        </Stack>
      </Drawer>

      <Box>
        <Modal
          open={startChat}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",

              bgcolor: "background.paper",
              border: "1px solid #f5f5f5",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              pb={2}
            >
              Are you sure you want to Accept Bid?
            </Typography>
            <Stack direction="row" spacing={8}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => fetchBidApi(startChat)}
              >
                Yes
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setStartChat(false)}
              >
                No
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </React.Fragment>
  );
};

export default BidList;
