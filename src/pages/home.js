import React from 'react'
import './home.css'
import video1 from "../img/1215.mp4";
import video2 from "../img/VERTICAL_Nabillolz_Lift_off_commercial_2.mp4"
import Homesection1 from "../components/homesection1";
import Homesection2 from "../components/homesection2";
import Homesection3 from "../components/homesection3";
import { useEffect } from 'react';

const Home = ({ isActive }) =>{

   useEffect(() => {
      var video = document.getElementById("myVideo");
      var overlayDiv = document.getElementById("overlayDiv");
      overlayDiv.style.height = video.clientHeight + "px";

  // Update the height if the window is resized
  window.addEventListener("resize", function() {
    overlayDiv.style.height = video.clientHeight + "px";
   });
   })
   return (
      <div className='homeContainer' >
   
      <video id='myVideo' className='video' autoPlay loop muted >
         <source src={video1} type='video/mp4' />
        </video>
      <video id='myVideo' className='video2' autoPlay loop muted >
      <source src={video2} type="video/mp4" />
      </video>
      
      <div id='overlayDiv' className='hero-text'>
      {/* <h1 className='yours'>VOTRE AGENCE DIGITALE </h1>
      <h1 className='yours'>EN ALGERIE</h1>
      <hr></hr>
      <p>Ce n'est pas un site web ordinaire, ni une équipe ordinaire, ni des produits ordinaires.</p> */}
      </div>
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />

      
      </div>)
}

export default Home