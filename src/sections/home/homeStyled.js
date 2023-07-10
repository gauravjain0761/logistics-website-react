import { Box,  styled, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f6f6f7",
  padding: "5em",
}));
export const StyledIconBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));
export const StyledListBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
}));
export const StyledLocBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
  padding:"4em"
}));
export const StyledImageBox = styled(Box)(({ theme }) => ({
  width: "6em",
}));
export const StyledBgTestBox = styled("div")(({ theme }) => ({
  margin: "1em auto",
  width: "100%",
  height: "100%",
  padding: "1em 0 2em 0",
  backgroundImage: `url(/testbg.avif)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "1em 0",
  color: "#fff",
}));
export const StyledBoxTest = styled(Box)(({ theme }) => ({
  backgroundColor: "#ff7533",
  padding: "3em 0",
}));
export const StyledBoxhelpful = styled(Box)(({ theme }) => ({
  backgroundColor: "#ececec",
  padding: "4em 0",
}));

