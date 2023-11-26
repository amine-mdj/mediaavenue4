import './section4.css'
import { useState, useEffect } from 'react';


const Section4 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec4-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec4">
    <h2>Quels types de produits/services proposez-vous ?</h2>
  
    <textarea id="w3review" name="w3review" rows="8" cols="100"/>
    
  </div>
  </div>)
}
export default Section4