import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import TrackGoogleMaps from "@/module/map/track_job";

import { Box, Button, Card, Modal, Stack, Typography } from "@mui/material";
import React from "react";

const MapModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
    
      <Button
        color="secondary"
        fullWidth
        variant="outlined"
        startIcon={<Iconify icon="carbon:map" />}
        onClick={handleOpen}
        sx={{
          fontWeight: 500,
        }}
      >
        Map
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
            textAlign: "center",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "1px solid #f5f5f5",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Box>
            <Box
              sx={{ position: "relative", overflow: "hidden", height: "35em" }}
            >
             <Box textAlign="end">
        <Iconify
          onClick={handleClose}
          sx={{
            cursor: "pointer",
            borderRadius: "50%",
            border: "1px solid grey",
            mt: 2,
            mr: 2,
          }}
          icon="basil:cross-solid"
          width={30}
        />
      </Box>
              <TrackGoogleMaps close={handleClose}/>
              <Box
                sx={{
                  position: "absolute",
                  top: "7em",
                  left: "10px",
                  pr: 1,
                  py: 1,
                  maxHeight: "28em",
                  overflowY: "scroll",
                }}
              >
                {[...Array(5)].map((elem, index) => {
                  return (
                    <Box key={index} sx={{ scrollSnapAlign: "start" }}>
                      <Card sx={{ p: 2, mb: 0.5 }}>
                        <Stack direction="row" alignItems="center" spacing={3}>
                          <Stack>
                            <Box>
                              <Typography fontWeight={500}>
                                Pickup {index + 1}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography color="grey">
                                123 Address Xyz, State
                              </Typography>
                            </Box>
                          </Stack>
                          <Box>
                            <Button
                              variant="outlined"
                              color="dark"
                              size="small"
                            >
                              View
                            </Button>
                          </Box>
                        </Stack>
                      </Card>
                      <Card sx={{ p: 2, mb: 2 }}>
                        <Stack direction="row" alignItems="center" spacing={3}>
                          <Stack>
                            <Box>
                              <Typography fontWeight={500}>
                                Drop off {index + 1}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography color="grey">
                                427 Address Xyz, State
                              </Typography>
                            </Box>
                          </Stack>
                          <Box>
                            <Button
                              variant="outlined"
                              color="dark"
                              size="small"
                            >
                              View
                            </Button>
                          </Box>
                        </Stack>
                      </Card>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default MapModal;
