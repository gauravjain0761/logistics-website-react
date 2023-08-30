import { Heading } from "@/components/typography";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledListItemText } from "./footerStyle";

const SectionThree = () => {
  return (
    <>
    
      <List>
        <ListItem>
          <Typography fontSize={20} fontWeight={600}>
            Services
          </Typography>
        </ListItem>
        <ListItemButton component="a" href="/blogs">
          <StyledListItemText primary="Blogs" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <StyledListItemText primary="News" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <StyledListItemText primary="Services" />
        </ListItemButton>
        <ListItemButton component="a" href="/testimonial/testimonials">
          <StyledListItemText primary="Testimonials" />
        </ListItemButton>
      </List>
    </>
  );
};

export default SectionThree;
