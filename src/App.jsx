import React, { useState } from 'react';
import './App.css';
import Aire from './component/Chat';
import Home from './component/Home';
import Navbar from '../src/component/navbar/Navbar'; // Import your Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [chat, setChat] = useState([]); // Define your chat state here

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aire' element={<Aire setChat={setChat} />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
