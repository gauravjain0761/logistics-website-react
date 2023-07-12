"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Fab, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import useOffSetTop from "@/hooks/useOffSetTop";
import TopBar from "./header/topbar";

const WebLayout = (props) => {
  const { children } = props;
  const value = useOffSetTop(52, { offset: ["start end", "end end"] });
  return (
    <>
      <TopBar />
      <Header />
      {value && <Toolbar id="back-to-top-anchor" />}
      {children}
      <Footer />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default WebLayout;
