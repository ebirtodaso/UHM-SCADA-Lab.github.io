import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Team from './pages/Team';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;