import './homesection3.css'
import Shop from '../img/Ajouter2.webp'

const Homesection3 = () =>{

   

      const handlemove = (e) =>{
        const btn = document.querySelector('.btnspan');
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
        console.log(x,y)
      }

    return (<div className='hmsec3'>
         <div className='hmsec3-left'>
            <h1>AU-DELÀ DES ATTENTES</h1>
            <hr/>
            <p>Choisir Media Avenue, c’est choisir... Une équipe conseil capable d’imaginer le futur de votre entreprise et de le construire.</p>
            <p>Là où de nombreuses agences sous-traitent leurs projets, Media Avenue dispose en interne de toutes les compétences pour accompagner ses clients avec une excellente maîtrise des problématiques.</p><p> Des chefs de projet passionnés du digital, un studio créatif régulièrement primé, une équipe technique de plus de 10 personnes, des experts des principaux leviers webmarketing. Tout cela sous le même toit et avec le même objectif : la réussite des projets grâce.</p>
              <p>Bien qu’implantés à Alger, nous offrons nos services à la clientèle française et francophone. Travailler avec nous, c’est travailler avec une équipe de culture française à des tarifs Algériens.</p>
              <a href='agency'><button onMouseMove={handlemove} className='btnspan'><span>Notre Agence</span></button></a>
                         </div>
         <div className='hmsec3-right'><img src={Shop} ></img></div>
         <div></div>
        </div>)
}

export default Homesection3