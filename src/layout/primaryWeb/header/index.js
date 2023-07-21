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
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "./navConfig";
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
import NavDesktop from "../nav/desktop/NavDesktop";
import { HEADER } from "@/utils/config-global";
import navConfig from "../nav/config-navigation";
import { NavSectionHorizontal } from "@/components/nav-section";

const drawerWidth = 240;

const Header = (props) => {
  const router = useRouter();
  const isMobile = useResponsive("down", "md");
  const responsiveHeight = isMobile ? 78.5 : 52;
  const value = useOffSetTop(responsiveHeight, {
    offset: ["start end", "end end"],
  });
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
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

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        component="nav"
        position={value ? "fixed" : "relative"}
        color="inherit"
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
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              
            <NavDesktop isOffset={isOffset} data={navConfig} />
              {/* {navItems &&
                navItems.length &&
                navItems.map((item) => (
                  <>
                    <Button
                      component={Link}
                      href={item.link}
                      key={item?.link}
                      sx={{ color: "#000", mx: 1 }}
                      aria-owns="mouse-over-popover"
                      aria-haspopup="true"
                    >
                      {item?.name}
                    </Button>
                  </>
                ))} */}

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
            </Box>
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
