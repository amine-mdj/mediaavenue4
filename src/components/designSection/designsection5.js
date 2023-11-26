import './designsection5.css'
import Warch from '../../img/website-architecture2.webp'

const Designsection5 = () =>{
    return(<div className='desec5'>
        <div className='desec5-left'>
            <h1>POURQUOI MEDIA AVENUE WEB POUR MON UX DESIGN ?</h1>
            <hr/>
            <p>Si vous <b>avez déjà un site web</b>, nous allons utiliser les données suivantes pour concevoir une nouvelle expérience utilisateur :</p>
            <div className='desec5-desc'>
                <p><b>Données Google Analytics</b> : Si le code de suivi est en place, ces données offrent des informations précieuses sur les caractéristiques démographiques de votre audience et leur interaction avec le site. Ces insights sont essentiels pour élaborer un plan de refonte partielle efficace.</p>
                <p><b>L’architecture de votre site</b> : L'architecture de votre site est un point focal important. Sa structure influence l'accessibilité et doit permettre une navigation intuitive, en accord avec les attentes et les comportements des utilisateurs.</p>
            </div>
        </div>
        <div className='desec5-right'>
            <img src={Warch}/>
        </div>
    </div>)
}

export default Designsection5