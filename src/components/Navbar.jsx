import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-scroll";
import styled from "styled-components";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Technologies", to: "technologies" },
  { label: "Contact", to: "contact" },
];

const NavButton = styled(Button)`
  color: #0A66C2 !important;
  font-family: "Nunito", sans-serif !important;
  font-weight: bold !important;
  font-size: 20px !important;
  text-transform: none !important;
  padding-bottom: 0px !important;
  transition: transform 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-bottom: 2px solid rgb(29, 233, 155);
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        paddingTop: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to}>
            <Link
              to={item.to}
              smooth
              duration={500}
              spy
              offset={-70}
              onClick={handleDrawerToggle}
              style={{
                textDecoration: "none",
                width: "100%",
                display: "block",
                backgroundImage: "linear-gradient(45deg,  #0059fd, #37ff1d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Dancing Script",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Button
        size="small"
        href="/cv.pdf"
        download
        endIcon={<DownloadIcon />}
        sx={{
          backgroundImage: "linear-gradient(45deg,  #0059fd, #37ff1d)",
          fontFamily: "Roboto Mono",
          fontWeight: "bold",
          color: "white",
          textTransform: "none",
          "&:hover": {
            transform: "scale(1.1)",
            borderBottom: "2px solid rgb(29, 233, 155)",
            cursor: "pointer",
          },
        }}
      >
        Download CV
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.6)" : "transparent",
          boxShadow: scrolled ? "0 6px 8px -4px rgba(0, 0, 0, 0.3)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily: "Roboto Mono",
              backgroundImage: "linear-gradient(45deg, #0A66C2, #0A66C2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.06)",
                transition: "transform 0.8s ease",
              },
            }}
          >
            <Link
              to="home"
              smooth
              duration={500}
              spy={true}
              offset={-70}
              style={{ textDecoration: "none" }}
            >
              Portfolio
            </Link>
          </Box>
          {/* Desktop nav links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ textDecoration: "none" }}
                >
                  <NavButton disableRipple variant="text">
                    {item.label}
                  </NavButton>
                </Link>
              ))}
              <Button
                size="small"
                href="/cv.pdf"
                download
                endIcon={<DownloadIcon />}
                sx={{
                  backgroundImage: "linear-gradient(45deg,  #0059fd, #37ff1d)",
                  fontFamily: "Roboto Mono",
                  fontWeight: "bold",
                  color: "white",
                  textTransform: "none",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderBottom: "2px solid rgb(29, 233, 155)",
                    cursor: "pointer",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          )}

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ backdropFilter: "blur(10px)" }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
