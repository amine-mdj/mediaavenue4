import './designsection7.css'
import Deno2 from '../../img/redesign-dino.webp'

const Designsection7 = () =>{
    return(<div className='desec7'>
        <div className='desec7-left'>
          <h1>REFONTE DE SITES WEB</h1>
          <hr/>
          <div className='desec7-desc'>
          <h2>Qu'est-ce que la refonte de siteweb ?</h2>
          <p><span>La refonte de siteweb</span> implique la revitalisation d'un site existant, préservant son contenu tout en revisitant plusieurs aspects de sa conception.</p></div><br/><br/>
          <div className='desec7-desc'>
          <h2>Pourquoi devrais-je procéder à un redesign de mon site web ?</h2>
          <p>Vous devriez envisager une refonte de votre site web :</p>
          <ul>
            <li>Les objectifs fixés ne sont pas atteints.</li>
            <li>La conception et la navigation semblent obsolètes.</li>
            <li>Les objectifs initiaux du site ont évolué.</li>
            <li>Une stratégie de référencement sérieuse est souhaitée.</li>
          </ul>
          </div>
        </div>
        <div className='desec7-right'>
         <img src={Deno2}/>
        </div>

    </div>)
}

export default Designsection7