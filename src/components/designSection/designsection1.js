import './designsection1.css'
import Top  from '../../img/Design2.webp'

const Designsection1 = () =>{
    return(<div className='desec1'>
        <div className='desec1-left'>
            <img src={Top} />
        </div>
        <div className='desec1-right'>
            <h1>L'ART DU WEB DESIGN</h1>
            <hr/>
            <p>Chez Media Avenue, <b>les seules limites sont celles de votre imagination</b>. Nous transformons vos idées en sites web dynamiques, alliant esthétique et fonctionnalité, pour une expérience utilisateur qui va au-delà du conventionnel.</p>
        </div>
    </div>)
}

export default Designsection1