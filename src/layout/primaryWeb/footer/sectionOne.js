import { Heading } from "@/components/typography";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { StyledListItemText } from "./footerStyle";

const SectionOne = () => {
  return (
    <>
      <Box>
        <Box component="img" src="/assets/images/logo/logo.jpg" />
        <List sx={{ mt: 1 }}>
          <StyledListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt labore et dolore magna aliqua." />
        </List>
      </Box>
    </>
  );
};

export default SectionOne;
