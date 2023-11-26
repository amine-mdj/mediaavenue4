import './section11.css'
import { useState, useEffect } from 'react';

const Section11 = () =>{
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      
      setFadeIn(true);
    }, []);
    return(<div className= {`multisec11-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
    <div className="multisec11">
      <h2>Enfin, nous avons besoin de quelques informations vous concernant :</h2>
     <label>Votre nom*</label><br/>
     <input type='text'/><br/>
     <label>Votre entreprise*</label><br/>
     <input type='text'/><br/>
     <label>Votre email*</label><br/>
     <input type='text'/><br/>
     <label>Votre lieu de résidence*</label><br/>
     <input type='text'/><br/>
     <label>Avez-vous d'autres informations à nous communiquer ?</label><br/>
     <textarea id="w3review" name="w3review" rows="8" cols="90"/><br/>
     <input type='checkbox'/> 
     <p> J'accepte d'être contacté(e) par Media Avenue par e-mail à des fins d'information et commerciales.
et commerciales</p>
      
      
    </div>
    </div>)
}

export default Section11