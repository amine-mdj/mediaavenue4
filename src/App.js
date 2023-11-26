import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import './App.css';

// ------------------- common components ----------------------------------

import Navbar from "./components/navbar"
import Footer from "./components/footer";
import Panel from "./components/panel";
import Scrollfixed from "./components/scrollfixed";
// ------------------------- guest routes ------------------------------
import Home from "./pages/home";
import Creation from "./pages/creation";
import Programmation from "./pages/programmation";
import Strategie from "./pages/strategie";
import Analyse from "./pages/analyse";
import Publicite from "./pages/publicite";
import Agency from "./pages/agency";
import Contact from "./pages/contact";
import Multistep from "./pages/multistep";


function App() {
  
  

  const [footerVisible, setFooterVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
 
  const toggleClass = () => {
    setIsActive(!isActive);
    
    
  };

  
  

  useEffect(()=>{
    const footerElement = document.querySelector('.footer-wrapper');
    const handlescroll = () =>{
      if (footerElement.getBoundingClientRect().top <= window.innerHeight) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
      
    }
    window.addEventListener('scroll', handlescroll);
    
  },[])
  return (
    <Router>
    { footerVisible ? null : <Scrollfixed/> }
    <Navbar isActive={isActive} toggleClass={toggleClass}  />
    <Panel isActive={isActive} >
    <Routes>
          <Route path="/" element={<Home isActive={isActive} />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/strategie" element={<Strategie />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/publicité" element={<Publicite />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Multistep" element={<Multistep />} />
    </Routes>
    
    <Footer />
    </Panel>
  </Router>
  
  );
}

export default App;
