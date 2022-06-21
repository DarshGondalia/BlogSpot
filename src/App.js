import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Random from './components/Random';
import Profile from './components/Profile';
import MyBlogs from './components/MyBlogs';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className='Title'>
        <div className='TitleName'>
          <strong>BlogSpot</strong>
          
        </div>
      </div>

      <nav id="NavBar">
        <Link to="/"> Home </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/random">Random</Link>
        <Link to="/myblogs">MyBlogs</Link>
        <Link to="/login" id="login" className='LoginButton'> login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>


    </Router>
  );
}

export default App;
