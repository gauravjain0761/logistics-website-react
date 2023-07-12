import { Close } from "@mui/icons-material";
import { Box, DialogTitle, Divider, IconButton, Stack } from "@mui/material";
import React from "react";

export const DialogHeader = ({ onClose, title }) => {
  return (
    <Box sx={{ background: (theme) => theme.palette.primary.main }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <DialogTitle
          color="inherit"
          sx={{ color: (theme) => theme.palette.common.white }}
        >
          {title}
        </DialogTitle>
        <Box mr={1}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};
