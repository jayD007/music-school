import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { pages } from './constants/pages';
import { ListItemIcon, ListItemText, MenuList } from '@mui/material';

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [activeTab, setActiveTab] = React.useState<string>(pages[0].title);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuItemClick = (route: string, title: string) => {
    handleCloseNavMenu();
    setActiveTab(title);
    navigate(route);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="border border-color navbar-center"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginTop: 60,
        marginBottom: 60,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                  backdropFilter: 'blur(15px)', // Blurry glass effect
                },
              }}
            >
              <div style={{ width: '250px' }}>
                {pages.map((page, index) => (
                  <MenuList>
                    <MenuItem
                      key={page.title}
                      onClick={() =>
                        handleMenuItemClick(page.route, page.title)
                      }
                      selected={activeTab === page.title}
                    >
                      <ListItemIcon>
                        {page.icon &&
                          React.createElement(page.icon, {
                            style: {
                              color: '#B0960A',
                              fontSize: '2rem',
                              paddingRight: '20px',
                            },
                          })}
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          style={{
                            color: 'white',
                            fontWeight: 100,
                          }}
                        >
                          {page.title}
                        </Typography>
                      </ListItemText>
                    </MenuItem>
                  </MenuList>
                ))}
              </div>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleMenuItemClick(page.route, page.title)}
                sx={{
                  my: 2,
                  color: activeTab === page.title ? 'red' : 'white',
                  display: 'block',
                  backgroundColor:
                    activeTab === page.title
                      ? 'rgba(0, 0, 0, 0.1)'
                      : 'transparent',
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};