import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Registration from './components/Registration';
import {ThemeProvider} from '@mui/material/styles';
import { ThemeGenrator } from './components/UI/Theme';

const App = () => {
  return (
    <ThemeProvider theme={ThemeGenrator}>

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
};

export default App;