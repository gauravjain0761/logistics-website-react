import { Close } from "@mui/icons-material";
import { Box, DialogTitle, Divider, IconButton, Stack } from "@mui/material";
import React from "react";

export const DialogHeader = ({ onClose, title }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <DialogTitle>{title}</DialogTitle>
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
