import { Heading } from "@/components/typography";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledListItemText } from "./footerStyle";
import Link from "next/link";

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
          <Typography fontSize={20} fontWeight={600}>
            Website Links
          </Typography>
        </ListItem>
        <ListItemButton component={Link} href="/aboutus">
          <StyledListItemText primary="About us" />
        </ListItemButton>
        <ListItemButton component={Link} href="/testimonial/testimonials">
          <StyledListItemText primary="Testimonials" />
        </ListItemButton>
        <ListItemButton component={Link} href="/faqs">
          <StyledListItemText primary="Faq" />
        </ListItemButton>
        <ListItemButton component={Link} href="/contact_us">
          <StyledListItemText primary="Contact us" />
        </ListItemButton>
        <ListItemButton component={Link} href="/privacy_policy">
          <StyledListItemText primary="Privacy Policy" />
        </ListItemButton>
        <ListItemButton component={Link} href="/term_and_condition">
          <StyledListItemText primary="Term & Condition" />
        </ListItemButton>
      </List>
    </>
  );
};

export default SectionTwo;
