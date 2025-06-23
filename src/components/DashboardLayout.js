import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, List, ListItem, ListItemText,
  Typography, AppBar, Toolbar, IconButton
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useCustomTheme } from '../theme/useThemeContext';

const DashboardLayout = ({ children }) => {
  const { toggleTheme, mode } = useCustomTheme();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{
        width: 220,
        bgcolor: 'background.paper',
        p: 2,
        borderRight: '1px solid #ddd'
      }}>
        <Typography variant="h6" gutterBottom>
          🚀 Admin Dashboard
        </Typography>
        
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/calendar">
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/kanban">
            <ListItemText primary="Kanban" />
          </ListItem>
          <ListItem button component={Link} to="/table">
            <ListItemText primary="Table" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar with ONLY the toggle button on right */}
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page content below topbar */}
        <Box sx={{ p: 3, overflowY: 'auto', flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
