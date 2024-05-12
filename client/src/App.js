import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { themeSettings } from 'theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to="/dashboard" replace/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/products' element={<Products/>} />
              <Route path='/customers' element={<Customers/>} />
              <Route path='/transactions' element={<Transactions/>} />
              <Route path='/geography' element={<Geography/>} />
              <Route path='/overview' element={<Overview/>} />
              <Route path='/daily' element={<Daily/>} />
              <Route path='/monthly' element={<Monthly/>} />
              <Route path='/breakdown' element={<Breakdown/>} />
              <Route path='/admin' element={<Admin/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
