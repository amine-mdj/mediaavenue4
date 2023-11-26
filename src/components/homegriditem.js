import './homegriditem.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Homegriditem = ({title, description, img, link}) =>{
   

      useEffect(()=>{
        Aos.init()
      },[])

      return (<div data-aos="fade-down" className='griditem'>
      <a href={link}><img src={img}  alt='this is an image'></img></a>
      <h1>{title}</h1>
      <p>{description}</p>
   </div>)
}

export default Homegriditem