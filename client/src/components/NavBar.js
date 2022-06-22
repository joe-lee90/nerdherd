import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  const handleCheckout = () => {
    
  }

  return (
    <AppBar position="static" style={{ background: '#E3EBF8' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Home">
            <Typography
              onClick={handleHomeClick}
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              🤓nerdherd
            </Typography>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleProfileClick} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Checkout">
              <IconButton onClick={handleCheckout} sx={{ p: 0 }}>
                <ShoppingCartIcon/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;