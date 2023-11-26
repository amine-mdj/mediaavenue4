import './section9.css'
import { useState, useEffect } from 'react';

const Section9 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec9-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec9">
    <h2>Avez-vous besoin que nous vous fassions une offre pour l'hébergement de votre site web ?</h2>
    <div>
    <input
      type="radio"
      id="pos"
      name="fav_language"
      value="programming"
    />
    <label for="pos">oui</label>
    <br />
    <input type="radio" id="neg" name="fav_language" value="SEO" />
    <label for="neg">non</label>
    <br />
    </div>
    
  </div>
  </div>)
}
export default Section9