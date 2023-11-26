import "./section1.css";
import { useState, useEffect } from 'react';

const Section1 = () => {

    const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return (
    <div className={`multisec1-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
    <div className="multisec1">
      <h2>Quel service recherchez-vous aujourd'hui ?</h2>
    
      <input
        type="radio"
        id="programming"
        name="fav_language"
        value="programming"
      />
      <label for="programming">Web design / Programation Web</label>
      <br />
      <input type="radio" id="SEO" name="fav_language" value="SEO" />
      <label for="SEO">SEO - Optimisation des moteurs de recherche</label>
      <br />
      <input
        type="radio"
        id="advertising"
        name="fav_language"
        value="advertising"
      />
      <label for="advertising">Publicité en ligne</label>
      <br />
      <input
        type="radio"
        id="analytics"
        name="fav_language"
        value="analytics"
      />
       <label for="analytics">Analyse du web</label>
      <br />
    </div>
    </div>
  );
};
export default Section1;
