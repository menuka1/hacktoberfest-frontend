import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { ThemeProvider } from "@mui/material";
import themeFactory from "../config/theme";
import Values from "values.js";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let primaryColor = "#170F1E";
  let secondaryColor = "#e5E1E6";
  let selectedHeaderFont = "Poppins";
  let selectedBodyFont = "Poppins";
  const primary = new Values(primaryColor);
  const secondary = new Values(secondaryColor);

  const theme = themeFactory({
    primary: {
      main: primaryColor,
      A100: primary.tint(75).hexString(),
      A200: primary.tint(85).hexString(),
      A400: primary.tint(90).hexString(),
      dark: primary.shade(15).hexString(),
      light: primary.tint(85).hexString(),
    },
    secondary: {
      main: secondaryColor,
      A100: secondary.tint(75).hexString(),
      A200: secondary.tint(85).hexString(),
      A400: secondary.tint(90).hexString(),
      dark: secondary.shade(15).hexString(),
      light: secondary.tint(85).hexString(),
    },
    headerFont: selectedHeaderFont,
    bodyFont: selectedBodyFont,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;