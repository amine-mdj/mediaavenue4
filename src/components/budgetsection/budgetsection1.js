import "./budgetsection1.css";
import Screenshot from '../../img/website-for-restaurants-screenshot.webp'

const Budgetsection1 = () => {
  return (
    <div className="budsec1">
      <div className="budsec1-left">
        <img src={Screenshot} alt='screen shot img'/>
        <div className="flex-buttons">
            <div className="flex-buttons-inner"><button>DEMO SITE WEB</button></div>
            <div className="flex-buttons-inner"><button >DEMO ADMIN</button></div>
        </div>
      </div>
      <div className="budsec1-right">
        <div className="budsec1-right-wrapper">
          <h1>SITE INTERNET POUR RESTAURANTS</h1>
          <hr />
          <p>
            A Pineapple Web, nous écoutons nos clients et utilisons leur
            expérience pour leur proposer des solutions adaptées.
          </p>
          <div className="budsec1-inner">
            <p>
              C’est ainsi qu’est né le projet de proposer un site internet à
              petit prix, conçu spécifiquement pour les restaurants, les bars et
              les cafés :
            </p>

            <p>
              <span>Tarif :</span> <span className="anim-price">250€</span>
            </p>
            <p>
              <span>Délai de livraison :</span> 3 jours
            </p>
            <p>
              <span>Contenu :</span>
            </p>
            <ul>
              <li>Page d’accueil</li>
              <li>
                Page « catégorie de Menus » (exemple : Entrée/plat principal…)
              </li>
              <li>
                Page « plats » (exemple : Salade grecque/Quiche/Carpaccio…)
              </li>
              <li>Page « Qui sommes-nous ? »</li>
              <li>Page « Réserver une table »</li>
            </ul>
            <p>
              <span>CMS</span> (système d’administration) : Nous avons développé
              notre propre système d’administration afin de vous proposer une
              solution simple d’utilisation et extrêmement légère.
            </p>
            <p>
              <span>Options disponibles</span> (coûts supplémentaires
              applicables) :
            </p>
            <ul>
              <li>Pages « Nouveauté/blog »</li>
              <li>Multilingue</li>
              <li>
                Intégration d’un widget affichant des avis de consommateurs
                (prestataire de votre choix)
              </li>
            </ul>
            <p>
              <span>Services complémentaires :</span>
            </p>
            <ul>
              <li>
                SEO local : Inscription de votre entreprise sur Google my
                business/Bing places for business/Yelp/Trip advisor/Foursquare…
                : 100€
              </li>
              <li>Remplissage du contenu de vos pages : 6€/page</li>
              <li>Location de votre nom de domaine : 25€/an</li>
              <li>Hébergement de votre site : 10€/mois</li>
              <li>Campagnes Google Adwords ciblées</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgetsection1;
