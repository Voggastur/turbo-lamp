import './App.css';
import React from 'react';
import "@fontsource/dm-sans"; // Defaults to weight 400.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from './components/naviBar';

import Home from './pages/home';
import HowItWorks from './pages/howItWorks';
import About from './pages/about';
import Support from './pages/support';
import SocialPage from "./pages/social";
import ContactPage from "./pages/contact";
import PrivacyPolicy from "./pages/privacyPolicy"

function App() {
  return (
    
     <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/howItWorks" element={<HowItWorks/>}/>
          <Route path="/social" element={<SocialPage/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />

        </Routes>

    </Router>

  );
}

export default App;
