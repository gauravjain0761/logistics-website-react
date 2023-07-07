import React from "react";
import WebHeader from "./header";
import WebFooter from "./footer";

export const WebLayout = ({ children }) => {
  return (
    <React.Fragment>
      <WebHeader />
      {children}
      <WebFooter />
    </React.Fragment>
  );
};
