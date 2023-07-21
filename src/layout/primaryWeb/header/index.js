import React from "react";
import MobileDrawer from "./drawer";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Popover,
  Stack,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "./navConfig";
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { clearToken, isAccessToken } from "@/utils/localStorageAvailable";

const drawerWidth = 240;

const Header = (props) => {
  const router = useRouter();
  const token = isAccessToken();
  const isMobile = useResponsive("down", "md");
  // const responsiveHeight = isMobile ? 78.5 : 52;
  const value = useOffSetTop(10, {
    offset: ["start end", "end end"],
  });
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <Box sx={{ my: 2 }} component={Link} href="/">
        <Box
          component="img"
          width={200}
          height={50}
          src="/assets/images/logo/logo.jpg"
          alt="Logo"
          loading="lazy"
          sx={{
            objectFit: "contain",
            background: "transparent",
            backgroundSize: "cover",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems &&
          navItems.length &&
          navItems.map((item, index) => {
            return (
              <React.Fragment key={`parent-${index}`}>
                <ListItem disablePadding onClick={handleDrawerToggle}>
                  <ListItemButton
                    LinkComponent={Link}
                    href={item?.link}
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
    </Box>
  );

  console.log("valuevalue", value);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        component="nav"
        position={"fixed"}
        color="inherit"
        sx={{
          "&.MuiAppBar-root": {
            boxShadow: value
              ? "0px 2px 4px -1px rgba(145, 158, 171, 0.2), 0px 4px 5px 0px rgba(145, 158, 171, 0.14), 0px 1px 10px 0px rgba(145, 158, 171, 0.12)"
              : "none",
          },
          background: (theme) =>
            value
              ? theme.palette.common.white
              : alpha(theme.palette.common.white, 0),
          transition: (theme) =>
            theme.transitions.create("background", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
        }}
      >
        <Container maxWidth>
          <Toolbar
            sx={{
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "space-between",
              },
            }}
          >
            <Box component={Link} href="/">
              <Box
                component="img"
                width={200}
                height={50}
                src="/assets/images/logo/logo.jpg"
                alt="Logo"
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  background: "transparent",
                  backgroundSize: "cover",
                }}
              />
            </Box>
            <Stack
              direction="row"
              sx={{ display: { xs: "none", sm: "flex" } }}
              spacing={1.5}
            >
              {navItems &&
                navItems.length &&
                navItems.map((item) => (
                  <>
                    <Button
                      endIcon={item?.isArrow ? <KeyboardArrowDownIcon /> : ""}
                      component={Link}
                      href={item.link}
                      key={item?.link}
                      sx={{
                        color: (theme) =>
                          !value
                            ? theme.palette.common.white
                            : theme.palette.common.black,
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                      aria-owns="mouse-over-popover"
                      aria-haspopup="true"
                    >
                      {item?.name}
                    </Button>
                  </>
                ))}
              {token ? (
                <Box component="div">
                  <Button
                    onClick={() => {
                      clearToken();
                      router.push("/auth/login");
                    }}
                    sx={{ color: "#fff", ml: 1 }}
                    aria-owns="mouse-over-popover"
                    aria-haspopup="true"
                    variant="contained"
                  >
                    <Typography>Log out</Typography>
                  </Button>
                </Box>
              ) : (
                <Box component="div">
                  <Button
                    onClick={() => {
                      // clearToken();
                      router.push("/auth/login");
                    }}
                    sx={{ color: "#fff", ml: 1 }}
                    aria-owns="mouse-over-popover"
                    aria-haspopup="true"
                    variant="contained"
                  >
                    Sign in/ Sign up
                  </Button>
                </Box>
              )}
            </Stack>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        drawer={drawer}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        container={container}
      />
    </>
  );
};

export default Header;
