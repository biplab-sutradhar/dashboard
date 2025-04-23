import React, { useState, useEffect, useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Modal, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { themeSettings } from 'theme';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/Dashboard';
import Products from 'scenes/Products';
import Customers from 'scenes/Customers';
import Transactions from 'scenes/Transactions';
import Geography from 'scenes/geography';
import Overview from 'scenes/overview';
import Daily from 'scenes/Daily';
import Monthly from 'scenes/Monthly';
import Breakdown from 'scenes/Breakdown';
import Admin from 'scenes/Admin';

function App() {
  const [showModal, setShowModal] = useState(true);  
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          {showModal && (
            <Modal
              open={showModal}
              sx={{
                backdropFilter: 'blur(5px)',  
                backgroundColor: 'rgba(0, 0, 0, 0.3)',  
              }}
              aria-labelledby="loading-modal-title"
              aria-describedby="loading-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',  
                  borderRadius: 2,
                  boxShadow: 24,
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <Typography id="loading-modal-title" variant="h5" component="h2" sx={{ color: 'text.primary' }}>
                  Please Wait...
                </Typography>
                <Typography id="loading-modal-description" sx={{ mt: 2, color: 'text.secondary' }}>
                  The backend is hosted on Render's free tier, so it may take a few seconds to load. <a href="https://render.com/pricing#plans">For reference</a>
                </Typography>
              </Box>
            </Modal>
          )}
          
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
