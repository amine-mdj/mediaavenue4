import './analyticsection3.css'
import Notepad from '../../img/analytics-notepad.webp'

const Analyticsection3 = ()=>{
  return(<div className='ticsec3'>
    <div className='ticsec3-left'>
     <h1>SERVICES WEB-ANALYTICS SUR-MESURE :<br/></h1>
     <hr/>
     <p>Notre agence web analytics peut également traiter des demandes plus spécifiques pour des clients plus familiers avec leur outil <span>Google Analytics:</span></p>
     <ul><br/>
      <li><span>Optimisation du E-commerce : </span>Mise en place de la fonction "Amélioration du E-commerce" pour des données plus précises sur les entonnoirs de conversion.</li><br/>
      <li><span>Installation de Balises :</span> Intégration de balises sur votre site via le gestionnaire de balises Google (GTM) pour le suivi d'actions spécifiques.</li><br/>
      <li><span>Vérification de Configuration :</span> Analyse approfondie de la configuration de Google Analytics.</li><br/>
      <li><span>Création de Dimensions et Mesures Personnalisées : </span>Développement de paramètres spécifiques pour des analyses approfondies.</li><br/>
      <li><span>Tests A/B pour la Conception des Pages :</span> Mise en œuvre de tests A/B pour optimiser la conception des pages.
...Et bien plus encore, pour répondre à vos besoins spécifiques.</li>
      
     </ul>
    </div>
    <div className='ticsec3-right'>
      <img src={Notepad} alt='notepad image'/>
    </div>
  </div>)
}

export default Analyticsection3