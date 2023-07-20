import { Heading } from "@/components/typography";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { StyledListItemText } from "./footerStyle";
import { Mail } from "@mui/icons-material";
import NewsLetterButton from "@/components/button/newsLetter";

const SectionFour = () => {
  return (
    <>
      {/* <Heading
        heading="Contact Us"
        isPositionLeft={true}
        sx={{
          fontSize: "20px!important",
          textAlign: "left",
          px: { lg: 2, md: 2, sm: 0, xs: 0 },
          color: "#555555",
        }}
      /> */}
      <List>
        <Stack spacing={0.5}>
          <Box>
            <Typography
              component="p"
              color="#666666"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: (theme) => alpha(theme.palette.common.black, 1),
              }}
            >
              NEWSLETTER
            </Typography>
          </Box>
          <Box>
            <NewsLetterButton />
          </Box>
        </Stack>
      </List>
    </>
  );
};

export default SectionFour;
