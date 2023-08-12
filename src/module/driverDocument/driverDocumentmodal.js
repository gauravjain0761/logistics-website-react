import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import TrackGoogleMaps from "@/module/map/track_job";
import { Close } from "@mui/icons-material";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const DocumentModal = ({ formik }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button
        color="secondary"
        fullWidth
        variant="outlined"
        startIcon={<Iconify icon="flat-color-icons:gallery" />}
        onClick={handleOpen}
        sx={{
          fontWeight: 500,
        }}
      >
        Add Documents
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            width: "70%",
            height:"70%",
            overflow:"hidden",
            overflowY:"scroll",
            textAlign: "center",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "1px solid #f5f5f5",
            borderRadius:"10px",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                  Driver Photo
                </Typography>
                {!formik.values.profile_img && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="profile_img"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "profile_img",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "profile_img_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.profile_img_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("profile_img", "");
                              formik.setFieldValue(
                                "profile_img_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.profile_img_url}
                        alt={formik.values.profile_img.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Driver Licence Front
                </Typography>
                {!formik.values.licence_front && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="licence_front"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "licence_front",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "licence_front_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.licence_front_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("licence_front", "");
                              formik.setFieldValue(
                                "licence_front_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.licence_front_url}
                        alt={formik.values.licence_front.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Driver Licence Back
                </Typography>
                {!formik.values.licence_back && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="licence_back"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "licence_back",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "licence_back_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.licence_back_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("licence_back", "");
                              formik.setFieldValue(
                                "licence_back_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.licence_back_url}
                        alt={formik.values.licence_back.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Address Proof
                </Typography>
                {!formik.values.address_proof && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="address_proof"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "address_proof",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "address_proof_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.address_proof_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("address_proof", "");
                              formik.setFieldValue(
                                "address_proof_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.address_proof_url}
                        alt={formik.values.address_proof.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Insurance Certificate
                </Typography>
                {!formik.values.insurance_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="insurance_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "insurance_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "insurance_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.insurance_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("insurance_cert", "");
                              formik.setFieldValue(
                                "insurance_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.insurance_cert_url}
                        alt={formik.values.insurance_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
           
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Transit Certificate
                </Typography>
                {!formik.values.transit_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="transit_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "transit_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "transit_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.transit_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("transit_cert", "");
                              formik.setFieldValue(
                                "transit_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.transit_cert_url}
                        alt={formik.values.transit_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>{" "}
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Liability Certificate
                </Typography>
                {!formik.values.liability_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="liability_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "liability_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "liability_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.liability_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("liability_cert", "");
                              formik.setFieldValue(
                                "liability_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.liability_cert_url}
                        alt={formik.values.liability_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>{" "}
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Vehicle Certificate
                </Typography>
                {!formik.values.vehicle_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="vehicle_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "vehicle_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "vehicle_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.vehicle_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("vehicle_cert", "");
                              formik.setFieldValue(
                                "vehicle_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.vehicle_cert_url}
                        alt={formik.values.vehicle_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>{" "}
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                V5c Certificate
                </Typography>
                {!formik.values.v5c_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="v5c_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "v5c_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "v5c_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.v5c_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("v5c_cert", "");
                              formik.setFieldValue(
                                "v5c_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.v5c_cert_url}
                        alt={formik.values.v5c_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>{" "}
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Dvia Certificate
                </Typography>
                {!formik.values.dvia_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="dvia_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "dvia_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "dvia_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.dvia_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("dvia_cert", "");
                              formik.setFieldValue(
                                "dvia_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.dvia_cert_url}
                        alt={formik.values.dvia_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack textAlign={"center"}>
                <Typography textAlign="left" variant="p">
                Nationality Proof Certificate
                </Typography>
                {!formik.values.nationality_cert && (
                  <TextBox
                    fullWidth
                    startIcon={
                      <Iconify icon="solar:file-bold" color="#ff7534" />
                    }
                    type="file"
                    size="small"
                    value=""
                    name="nationality_cert"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "nationality_cert",
                        e.target.files[0]
                      );
                      formik.setFieldValue(
                        "nationality_cert_url",
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                )}

                {formik.values.nationality_cert_url && (
                  <Card sx={{ width: "max-content" }}>
                    <CardContent
                      sx={{
                        pb: "10px !important",
                        pt: "30px !important",
                        px: "10px !important",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                        }}
                      >
                        <Card sx={{ borderRadius: "50%" }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              formik.setFieldValue("nationality_cert", "");
                              formik.setFieldValue(
                                "nationality_cert_url",
                                ""
                              );
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </Card>
                      </Box>
                      <Box
                        component="img"
                        style={{ margin: "10px" }}
                        src={formik.values.nationality_cert_url}
                        alt={formik.values.nationality_cert.name}
                        width="100px"
                        height="100px"
                        thumbnail
                      />
                    </CardContent>
                  </Card>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default DocumentModal;
