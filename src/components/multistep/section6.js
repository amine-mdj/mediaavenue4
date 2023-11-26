import './section6.css'
import { useState, useEffect } from 'react';

const Section6 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec6-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec6">
    <h2>Pourriez-vous dresser la liste des fonctionnalités/outils dont vous avez besoin pour votre application web ?
sur votre application web ?</h2>
  
    <textarea id="w3review" name="w3review" rows="8" cols="100"/>
    
  </div>
  </div>)
}
export default Section6