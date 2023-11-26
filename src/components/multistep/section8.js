import './section8.css'
import { useState, useEffect } from 'react';

const Section8 = () =>{

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(
  <div className= {`multisec8-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
    <div className="multisec8">
     <h2>Avez-vous un budget fixe que vous êtes prêt à
investir dans ce projet ?</h2>
     <div className='select-multi'>
      <input type='text'/>
      <select id="cars" name="carlist" form="carform">
  <option value="volvo">TWD (New Taiwan Dollar)</option>
  <option value="saab">USD (U.S. Dollar)</option>
  <option value="opel">EUR (Euro)</option>
  <option value="audi">GBS (Sterling Pound)</option>
</select>
     </div>
  </div>
  </div>)
}
export default Section8