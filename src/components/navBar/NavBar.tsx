import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import './style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { pages } from './constants/pages';
import { Button, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import logo from '../../assest/icons/muziekschool_heesch_logo.png';

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [activeTab, setActiveTab] = React.useState<string>(pages[0].title);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuItemClick = (route: string, title: string, id: string) => {
    handleCloseNavMenu();
    setActiveTab(title);
    navigate(route);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <img
            src={logo}
            alt="Muziekschool Heesch"
            style={{ width: '12rem' }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' },
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
                  <MenuList key={index}>
                    <MenuItem
                      onClick={() =>
                        handleMenuItemClick(page.route, page.title, page.id)
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
                onClick={() =>
                  handleMenuItemClick(page.route, page.title, page.id)
                }
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
