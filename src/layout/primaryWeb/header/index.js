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
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "./navConfig";
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavDesktop from "@/layout/secondaryWeb/nav/desktop/NavDesktop";
import { HEADER } from "@/utils/config-global";
import navConfig from "@/layout/secondaryWeb/nav/config-navigation";
import NavMobile from "@/layout/secondaryWeb/nav/mobile/NavMobile";

const drawerWidth = 240;

const Header = (props) => {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const router = useRouter();
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
      <NavMobile isOffset={isOffset} data={navConfig} />
        {/* {navItems &&
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
          })} */}
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
            <Box
              sx={{ display: { sm: "none", md: "flex" }, alignItems: "baseline" }}
            >
              <NavDesktop isOffset={isOffset} data={navConfig} />

              <Button
                component={Link}
                href={"/auth/login"}
                sx={{ color: "#fff", ml: 1 }}
                aria-owns="mouse-over-popover"
                aria-haspopup="true"
                variant="contained"
              >
                Sign in/ Sign up
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
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
