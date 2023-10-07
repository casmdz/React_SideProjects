import * as React from "react";
import { AppBar, Box, Toolbar, Menu, Badge } from "@mui/material";
import { Tooltip, MenuItem, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const pages = ["home", "about", "store"];



export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const { openCart, cartQuantity } = useShoppingCart()




  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#navbar"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Project!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#smaller-screen-nav"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Project
          </Typography>


          {/* this is the list of pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <NavLink
                key={page}
                to={page}
                onClick={handleCloseNavMenu}
                style={({ isActive, isPending }) => {
                  return {
                    marginInlineStart: '2rem',
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "green" : "white",
                  };
                }}
              >
                {page}
              </NavLink>

            ))}
          </Box>

          {/* right hand side button */}

          <Box sx={{ flexGrow: 0 }}>
            <div>
              <IconButton 
              aria-label="shopping cart" sx={{ color: "#fafafa" }}
              onClick={openCart}
              >
                <Badge
                  color="error"
                  badgeContent={cartQuantity}
                >
                  <Tooltip title="Your cart">
                    <ShoppingCartIcon />
                  </Tooltip>
                </Badge>
              </IconButton>

            </div>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
