import React from "react";
import MobileDrawer from "./drawer";
import { useRouter } from "next/router";
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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "./navConfig";
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { clearToken, isAccessToken } from "@/utils/localStorageAvailable";
import NavDesktop from "../nav/desktop/NavDesktop";
import navConfig from "../nav/config-navigation";
import { HEADER } from "@/utils/config-global";
import { filter } from "lodash";
import { useAuthContext } from "@/auth/useAuthContext";

const drawerWidth = 240;

const Header = (props) => {
  const router = useRouter();
  const token = isAccessToken();
  const { user, isAuthenticated, logout } = useAuthContext();
  const isMobile = useResponsive("down", "md");
  // const responsiveHeight = isMobile ? 78.5 : 52;
  const value = useOffSetTop(10, {
    offset: ["start end", "end end"],
  });
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      router.push("/auth/login");
    }
  };
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

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();

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
            value ? theme.palette.common.white : theme.palette.common.white,
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
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "baseline",
              }}
              spacing={0}
            >
              <NavDesktop
                value={value}
                isOffset={isOffset}
                data={
                  navConfig &&
                  filter(navConfig, (item) => {
                    return item.token(isAuthenticated);
                  })
                }
              />
              {isAuthenticated &&
                (user?.user_type !== "driver" ? (
                  <Typography
                    sx={{
                      mx: 1,
                      color: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderColor: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderBottom: router.asPath.startsWith("/dashboard")
                        ? "2px solid"
                        : "",
                      ...theme.typography.subtitle2,
                      textDecoration: "none",
                    }}
                    component={Link}
                    href={
                      user?.user_type === "driver"
                        ? `/dashboard/${user?.user_type}/active_jobs`
                        : `/dashboard/${user?.user_type}`
                    }
                  >
                    Dashboard
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      mx: 1,
                      color: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderColor: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderBottom: router.asPath.startsWith("/dashboard")
                        ? "2px solid"
                        : "",
                      ...theme.typography.subtitle2,
                      textDecoration: "none",
                    }}
                    component={Link}
                    href={
                      user?.user_type === "driver"
                        ? `/dashboard/${user?.user_type}/active_jobs`
                        : `/dashboard/${user?.user_type}`
                    }
                  >
                    Dashboard
                  </Typography>
                ))}
              {isAuthenticated && (
                <Typography
                  sx={{
                    mx: 1.5,
                    pr: 1,
                    color: (theme) =>
                      router.asPath === `/${user?.user_type}/profile`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderColor: (theme) =>
                      router.asPath === `/${user?.user_type}/profile`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderBottom:
                      router.asPath === `/${user?.user_type}/profile`
                        ? "2px solid"
                        : "",
                    ...theme.typography.subtitle2,
                    textDecoration: "none",
                  }}
                  component={Link}
                  href={`/${user?.user_type}/profile`}
                >
                  My Profile
                </Typography>
              )}
              <div>
                <Button
                  variant="outlined"
                  sx={{ color: "#000", ml: 0.8, mr: 1.5 }}
                  onClick={() => router.push("/contact_us")}
                >
                  Contact us
                </Button>
                <Button variant="contained" onClick={handleAuth}>
                  {isAuthenticated ? "Log Out" : "Log in"}
                </Button>
                {/* {token ? (
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
                      <Typography variant="subtitle2">Log out</Typography>
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
                      <Typography variant="subtitle2">
                        Sign in/ Sign up
                      </Typography>
                    </Button>
                  </Box>
                )} */}
              </div>
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
