import './analyticsection4.css'
import Whatis from '../../img/what-is-icon.webp'

const Analyticsection4 = ()=>{
  return(<div className='ticsec4'>
    <div className='ticsec4-left'>
     <img src={Whatis} alt='what is icon image' />
    </div>
    <div className='ticsec4-right'>
     <h1>QU’EST CE QU’UN OUTIL WEB ANALYTICS ?</h1>
     <hr/>
     <p>Un outil d'analyse web constitue une plateforme cruciale simplifiant la collecte, la mesure et l'analyse des données utilisateur sur votre site web.</p>
     <p>Il offre une vision approfondie de l'audience, révélant comment les visiteurs ont découvert votre site et comment ils interagissent avec votre contenu. Cette compréhension approfondie vous permet d'optimiser votre site en alignant l'expérience utilisateur sur les besoins et comportements spécifiques de votre audience.</p>
    </div>
  </div>)
}

export default Analyticsection4