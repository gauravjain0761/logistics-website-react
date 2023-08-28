"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Box, Fab, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import useOffSetTop from "@/hooks/useOffSetTop";
import TopBar from "./header/topbar";
import useResponsive from "@/hooks/useResponsive";

const PrimaryWebLayout = (props) => {
  const { children } = props;
  const isMobile = useResponsive("down", "md");
  // const responsiveHeight = isMobile ? 78.5 : 52;
  // const value = useOffSetTop(responsiveHeight, {
  //   offset: ["start end", "end end"],
  // });
  return (
    <>
      <Header />
      <Box id="back-to-top-anchor" />
      {children}
      {/* <Toolbar /> */}
      <Footer />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default PrimaryWebLayout;
