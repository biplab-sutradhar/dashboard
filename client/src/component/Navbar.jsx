import React, { useState } from 'react';
import {
  ArrowDropDown,
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profile from '../asset/profile.jpeg';
import Profile from '../asset/profile.jpeg';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import { Toolbar } from '@mui/material';
import FlexBetween from './FlexBetween';

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setanchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setanchorEl(event.currentTarget);
  const handleClose = () => setanchorEl(null);
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
        flexGrow: 1,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          marginLeft: isSidebarOpen ? '240px' : '0',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>

          <InputBase
            placeholder="Search..."
            sx={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '2px',
              paddingX: '4px',
            }}
          />
          <IconButton>
            <Search />
          </IconButton>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profile}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
