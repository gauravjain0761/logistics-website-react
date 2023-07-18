import ProgressBar from "@/components/progressBar";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";
import "@/styles/globals.css";
import ThemeProvider from "@/theme";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// slick-carousel
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <React.Fragment>
      <ThemeProvider>
        <ProgressBar />
        <ToastContainer />
        <SnackbarProvider>{getLayout(<Component {...pageProps} />)}</SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
