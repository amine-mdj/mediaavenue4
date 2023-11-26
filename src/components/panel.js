import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './panel.css'


const Panel = ({children}) => {

  const [active, setishere] = useState(false)


  useEffect(()=>{
  const footerElement2 = document.querySelector('.footer-wrapper');
    const handlescroll2 = () =>{
      if ( window.scrollY > 0) {
        setishere(true);
        if(footerElement2.getBoundingClientRect().top <= window.innerHeight){
          setishere(false);
        }
      } else {
        setishere(false);
      }
      
    }
    window.addEventListener('scroll', handlescroll2);
    
  },[])

  const smooth = 'smooth'
    const back = ()=>{
      window.scrollTo({top : 0, behavior: 'smooth'})
    }
   return(
    <div className='panel'>
      <div onClick={back} className={active ? `active2 ${smooth}` : ` ${smooth}`}>
      <FontAwesomeIcon icon="fa-solid fa-chevron-up" size="lg" style={{color: "#ffffff",}} />
      </div>
      {children}
    </div>
   )
}


export default Panel