import './designsection12.css'
import Hotels from '../../img/hotels.webp'

const Designsection12 = () =>{

    const handlemove = (e) =>{
        const btn = document.querySelector('.btnanim');
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
        console.log(x,y)
      }
    return(<div className='desec12'>
        <div className='desec12-left'>
         <h1>DESIGN DE SITES WEB POUR <br/> HÔTELS</h1>
         <hr/>
         <p>Chez Media avenue nous écoutons nos clients et nous utilisons leurs commentaires et notre expérience pour trouver de nouvelles solutions. C'est ainsi que naît le<span> design de notre site web pour les hôtels.</span>
             </p>
         <p>Nous aspirons à offrir aux propriétaires et gérants d'hôtels un site web
             spécialement conçu pour présenter leur activité aux clients potentiels de
              la meilleure façon possible.</p>
        <div className='desec12-btn'>
           <button onMouseMove={handlemove} className='btnanim'><span>LIRE LA SUITE</span></button>
        </div>
         
        </div>

        <div className='desec12-right'>
            <img src={Hotels}/>
        </div>
    </div>)
}

export default Designsection12