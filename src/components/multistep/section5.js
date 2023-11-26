import './section5.css'
import { useState, useEffect } from 'react';

const Section5 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec5-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec5">
    <h2>Quel type d'application web souhaitez-vous créer (ex : CRM, plateforme de réservation, médias sociaux, plateforme de rencontre, ...) ?</h2>
  
    <textarea id="w3review" name="w3review" rows="8" cols="100"/>
    
  </div>
  </div>)
}
export default Section5