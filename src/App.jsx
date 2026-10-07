import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Roadmaps from './pages/Roadmaps';
import Competitions from './pages/Competitions';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/classes">Classes</Link> | <Link to="/roadmaps">Roadmaps</Link> | <Link to="/competitions">Competitions</Link> | <Link to="/gallery">Gallery</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}