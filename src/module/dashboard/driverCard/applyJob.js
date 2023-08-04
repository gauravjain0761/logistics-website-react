import { TextBox } from '@/components/form';
import Iconify from '@/components/iconify/Iconify';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react'

const ApplyJobModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <Box>
        <Button
          color="dark"
          fullWidth
          variant="outlined"
          startIcon={<Iconify icon="icon-park:check-correct" />}
          onClick={handleOpen}
          sx={{
            fontWeight: 500,
          }}
        >
          Apply Job
        </Button>
        <Modal
          open={open}
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
            <Stack spacing={2}>
              <Box>
                <TextBox
                  fullWidth
                  size="small"
                  label="Bid Price"
                  placeholder="Bidding Price"
                />
              </Box>
              <Box>
                <TextBox
                  fullWidth
                  size="small"
                  multiline={true}
                  rows={4}
                  label="Note"
                  placeholder="Note For Customer"
                />
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                pb={2}
              >
                Are you sure you want to Apply for the Job ?
              </Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Button fullWidth variant="outlined" onClick={handleClose}>
                Yes
              </Button>
              <Button fullWidth variant="outlined" onClick={handleClose}>
                No
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    );
  };
  

export default ApplyJobModal