import './section3.css'
import { useState, useEffect } from 'react';

const Section3 = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec3-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec3">
    <h2>Quel type de plateforme êtes-vous prêt à construire ?</h2>
  
    <input
      type="radio"
      id="application"
      name="fav_language"
      value="programming"
    />
    <label for="application">Application web</label>
    <br />
    <input type="radio" id="E-commerce" name="fav_language" value="SEO" />
    <label for="E-commerce">Site web E-commerce</label>
    <br />
    <input
      type="radio"
      id="Business"
      name="fav_language"
      value="programming"
    />
    <label for="Business">Site web d'entreprise</label>
    <br />
    <input
      type="radio"
      id="Blog"
      name="fav_language"
      value="programming"
    />
    <label for="Blog">Blog</label>
    <br />
    <input
      type="radio"
      id="Other"
      name="fav_language"
      value="programming"
    />
    <label for="Autres">Other</label>
    <br />
    
  </div>
  </div>)
}
export default Section3