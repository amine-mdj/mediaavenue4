import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () =>{
 
   const handlemove = (e) =>{
      const btn = document.querySelector('.startproject');
      const x = e.pageX - btn.offsetLeft
      const y = e.pageY - btn.offsetTop
      btn.style.setProperty('--x', x + 'px')
      btn.style.setProperty('--y', y + 'px')
      console.log(x,y)
   } 

   const handleLinkClick = () => {
     
      window.scrollTo(0, 0);
  
    };

   return (<div className='footer-wrapper'>
      <div className='percent first-percent'>
         <button onMouseMove={handlemove} className='startproject'><span>DÉMARRER UN PROJET</span></button>
         
      
      </div>
      <div className='percent second-percent'>
         <h1>NOS SERVICES</h1>
         <hr/>
         <ul>
            <li><Link to='/programmation' onClick={handleLinkClick}>Programmation web</Link></li>
            <li><Link to='creation' onClick={handleLinkClick}>Web design</Link></li>
            <li><Link to='strategie' onClick={handleLinkClick}>Stratégie de Référencement<br/> SEO</Link></li>
            <li><Link to='/analyse' onClick={handleLinkClick}>Analyse de Données</Link></li>
            <li><Link to='publicité' onClick={handleLinkClick}>Publicité en Ligne</Link></li>
         </ul>
      </div>
      <div className='percent third-percent'>
      <h1>CONTACTS</h1>
         <hr/>
         
         <p><FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#ffffff",display:'inline', marginRight:'10px'}} />
Alger, Algérie<br/></p>
            <p><FontAwesomeIcon icon="fa-solid fa-phone-flip" style={{color: "#ffffff",display:'inline', marginRight:'10px'}} />
               +32 2 586 21 90</p>
            <p><FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#ffffff",display:'inline', marginRight:'10px'}} />info@mediaavenue.eu</p>
      </div>
      <div className='percent forth-percent'>
      <h1>SUIVEZ-NOUS</h1>
         <hr/>
         <div>
         <FontAwesomeIcon icon="fa-brands fa-square-facebook" className='iconfooter' size="3x"  />
         <FontAwesomeIcon icon="fa-brands fa-square-instagram"className='iconfooter' size="3x" />
         <FontAwesomeIcon icon="fa-brands fa-square-twitter" className='iconfooter' size="3x"/>
         <FontAwesomeIcon icon="fa-brands fa-linkedin" className='iconfooter' size="3x"/>
         </div>
         <p>Copyright © 2023 - MediaAvenue</p>
      </div>
   </div>)
}

export default Footer