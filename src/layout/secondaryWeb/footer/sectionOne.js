import { Heading } from "@/components/typography";
import { Box, List, ListItemButton, ListItemText, Stack } from "@mui/material";
import React from "react";
import { StyledListItemText } from "./footerStyle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const SectionOne = () => {
  return (
    <>
      <List>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOnIcon fontSize="large" />{" "}
          <StyledListItemText
            primary="United Kingdom"
            sx={{
              "& .MuiTypography-root": {
                fontSize: "20px",
              },
            }}
          />
        </Stack>
      </List>
    </>
  );
};

export default SectionOne;
