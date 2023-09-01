import SubscribeButton from "@/components/button/subscribeButton";
import { TextBox } from "@/components/form";
import axiosInstance from "@/utils/axios";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async ({initialValues}) => {
      await axiosInstance
        .post("api/auth/master/subscribe/add", {
          email: email,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("dddd", response.data);
          }
        }).catch((error)=>{
          const {response}= error;
          console.log(response)
        });
    },
  });

  return (
    <Box>
      <Container>
        <CardContent
          sx={{ paddingBottom: "24px!imporatant", position: "relative" }}
        >
          <Stack
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              p: 3,
              borderRadius: "20px",
              position: "absolute",
              width: "100%",
              top: "-4em",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
            justifyContent="space-between"
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            alignItems="center"
            spacing={{ md: 0, sm: 2, xs: 2 }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Stack direction="column" spacing={1.5} alignItems="left">
                <Typography
                  color={(theme) => theme.palette.common.white}
                  fontSize={24}
                  fontWeight={600}
                >
                  Subscribe To Our newsletter
                </Typography>{" "}
                <Typography
                  color={(theme) => theme.palette.common.white}
                  fontSize={14}
                  fontWeight={400}
                >
                  Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                  suscipit turpis.
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                component="form"
                onSubmit={formik.handleSubmit}
              >
                <TextBox
                  fullWidth
                  isBackgroundColor={true}
                  value={formik.values.email}
                  onChange={(e) =>
                    formik.setFieldValue("email", e.target.value)
                  }
                  textBoxSx={{
                    width: "16em",
                    "& .MuiOutlinedInput-input": {
                      background: "transparent !important",
                      color: "#fff",
                    },
                    "& .MuiFormControl-root": {
                      margin: "0px !important",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "10px",
                      borderColor: "#DFDFDF !important",
                    },
                  }}
                  label="Enter Your Email"
                  size="small"
                />
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    color="light"
                    type="submit"
                    sx={{
                      width: "10em",
                      height: "40px",
                      borderRadius: "10px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    Subscribe Now
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Container>
    </Box>
  );
};

export default Subscribe;
