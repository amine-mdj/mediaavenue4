import './section7.css'
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const Section7 = () =>{
  const [value, onChange] = useState(new Date());
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    setFadeIn(true);
  }, []);
  return(<div className= {`multisec7-wrapper fade-in ${fadeIn ? 'visible' : ''}`}>
  <div className="multisec7">
    <h2>Pourriez-vous dresser la liste des fonctionnalités/outils dont vous avez besoin  <br/> pour votre application web ?</h2>
       <div className="calendar-container">
      <Calendar 
      onChange={onChange} 
      value={value} 
      className="custom-calendar"
      tileClassName={({ date, view }) => {
        // Add the "selected-day" class to the selected day
        if (view === 'month' && date.getTime() === value.getTime()) {
          return 'selected-day';
        }
        return null;}}
      />
    </div>
    
    
  </div>
  </div>)
}
export default Section7