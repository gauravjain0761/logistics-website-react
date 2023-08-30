import { Heading } from "@/components/typography";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import { StyledListItemText } from "./footerStyle";

const SectionTwo = () => {
  return (
    <>
      {/* <Heading
        heading="Useful Links"
        isPositionLeft={true}
        sx={{
          fontSize: "20px!important",
          textAlign: "left",
          px: { lg: 2, md: 2, sm: 0, xs: 0 },
          color:"#555555!important"

        }}
      /> */}
      
      <List>
      <ListItem>
<Typography fontSize={20} fontWeight={600}>Website Links</Typography>
      </ListItem>
        <ListItemButton component="a" href="#simple-list">
          <StyledListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <StyledListItemText primary="Help" />
        </ListItemButton>
        <ListItemButton component="a" href="/faqs">
          <StyledListItemText primary="Faq" />
        </ListItemButton>
        <ListItemButton component="a" href="/contact_us">
          <StyledListItemText primary="Contact us" />
        </ListItemButton>
      </List>
    </>
  );
};

export default SectionTwo;
