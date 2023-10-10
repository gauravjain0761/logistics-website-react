import { TextBox } from "@/components/form";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Button,
  CardContent,
  Container, Stack,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

const Subscribe = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },

    onSubmit: async (values) => {
      await axiosInstance
        .post("api/auth/master/subscribe/add", values)
        .then((response) => {
          if (response.status === 200) {
            formik.resetForm();
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          enqueueSnackbar(response.data.error, {
            variant: "error",
          });
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
                <Box>
                  <TextBox
                    fullWidth
                    isAdditional={true}
                    value={formik.values.email}
                    onChange={(e) =>
                      formik.setFieldValue("email", e.target.value)
                    }
                    formSx={{
                      mb: 0,
                    }}
                    textBoxSx={{
                      width: "16em",

                      "& .MuiInput-root": {
                        color: "#fff !important",
                      },
                      "& .MuiFormControl-root": {
                        margin: "0px !important",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#fff !important",
                      },
                      "& .MuiInput-root:before": {
                        borderColor: "#fff !important",
                      },
                      "& .MuiInput-root:after": {
                        borderColor: "#fff !important",
                      },
                    }}
                    label="Enter Your Email"
                    size="small"
                  />
                  <Typography fontSize={10} color="common.white">
                    {formik.touched.email && formik.errors.email}
                  </Typography>
                </Box>
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
                      mb: formik.touched.email && formik.errors.email ? 2 : 0,
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
