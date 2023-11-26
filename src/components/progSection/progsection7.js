import './progsection7.css'
import Blog from '../../img/blog-websites.webp'

const Progsection7 = ()=>{
    return(<div className='progsec7'>
        <h1>SITE WEB PERSONNEL ET BLOGS</h1>
        <hr />
        <div className='progsec7-bottom'>
           <div className='progsec7-left'>
             <img src={Blog}/>
           </div>
           <div className='progsec7-right'>
             <h2>Qu'est-ce qu'un blog ?</h2>
             <p>Un blog, qu'il appartienne à un individu ou à une entreprise, est une plateforme en ligne conçue pour informer les visiteurs des dernières actualités liées à un sujet ou à un secteur spécifique.</p><p> Les blogueurs s'engagent généralement à susciter l'intérêt en créant un contenu unique et précieux.</p>
             <h2>Pourquoi devrais-je avoir un blog ?</h2>
             <p>Un blog bien entretenu peut établir votre autorité dans votre domaine, renforcer l'engagement avec votre audience, et améliorer la visibilité de votre marque.</p><p> C'est une plateforme dynamique pour partager vos connaissances, perspectives, et générer un dialogue constructif avec votre communauté.</p>
           </div>
        </div>
    </div>)
}

export default Progsection7