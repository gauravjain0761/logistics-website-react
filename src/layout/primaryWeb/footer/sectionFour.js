import { Heading } from "@/components/typography";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { StyledListItemText } from "./footerStyle";
import { Mail } from "@mui/icons-material";

const SectionFour = () => {
  return (
    <>
      <Heading
        heading="Contact Us"
        isPositionLeft={true}
        sx={{
          fontSize: "20px!important",
          textAlign: "left",
          px: { lg: 2, md: 2, sm: 0, xs: 0 },
          color: "#555555",
        }}
      />
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <LocationOnIcon sx={{ color: "#666666" }} />
          </ListItemIcon>
          <StyledListItemText primary="Lorem ipsum door sit amet, consectetur 12345" />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <CallIcon sx={{ color: "#666666" }} />
          </ListItemIcon>
          <StyledListItemText primary="123456892" />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <Mail sx={{ color: "#666666" }} />
          </ListItemIcon>
          <StyledListItemText primary="info@gamil.com" />
        </ListItemButton>
      </List>
    </>
  );
};

export default SectionFour;
