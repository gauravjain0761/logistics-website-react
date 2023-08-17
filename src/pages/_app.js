import { AuthProvider } from "@/auth/JwtContext";
import { MotionLazyContainer } from "@/components/animate";
import ProgressBar from "@/components/progressBar";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import ThemeProvider from "@/theme";
import React from "react";

// redux
import { Provider as ReduxProvider } from "react-redux";

// slick-carousel
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <ProgressBar />
          <SnackbarProvider>
            <AuthProvider>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  );
}
