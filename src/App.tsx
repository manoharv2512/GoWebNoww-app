import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

// function App() {
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar logo="GoWebNow" navItems={[
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ]} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Box>
  )
};

export default App;
