import './section2.css'
import { useState, useEffect } from 'react';

const Section2 = () =>{

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec2-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec2">
    <h2>Vous souhaitez :</h2>
  
    <input
      type="radio"
      id="Create"
      name="fav_language"
      value="programming"
    />
    <label for="Create">Créer un nouveau site web</label>
    <br />
    <input type="radio" id="Revamp" name="fav_language" value="SEO" />
    <label for="Revamp">Refonte d'un site web existant</label>
    <br />
    
  </div>
  </div>)
}
export default Section2