import './section10.css'
import { useState, useEffect } from 'react';

const Section10 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);

    return () =>{
      setFadeIn(false);
    }
  }, []);
  return(<div className= {`multisec10-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec10">
    <h2>Avez-vous besoin d'un ou de plusieurs services numériques supplémentaires (SEO/publicité en ligne/analyse web/...) ??
</h2>
  
    <textarea id="w3review" name="w3review" rows="8" cols="100"/>
    
  </div>
  </div>)
}
export default Section10