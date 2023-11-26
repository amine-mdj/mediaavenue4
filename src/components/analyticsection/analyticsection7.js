import "./analyticsection7.css";
import Datatypes from "../../img/web-analytics-data-type.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Analyticsection7 = () => {
  return (
    <div className="ticsec7">
      <div className="ticsec7-left">
        <h1>QUELS TYPES D’INFORMATIONS MON COMPTE GOOGLE ANALYTICS PEUT-IL COLLECTER ?</h1>
        <hr />
        <p>
          <span>Google Analytics </span>peut potentiellement collecter à peu près toutes les informations liées à l’utilisateur sur votre site. Il existe 4 catégories d’informations collectées par défaut :
        </p>
        <div className="ticsec7-1stbottom">
          <ul>
            <li>
              <span>Audience: </span>Données liées au volume d’audience, à la provenance géographique, au langage, à la démographie, au type d’appareil et navigateur utilisés…
            </li>
            <li>
              <span>Acquisition: </span>Données sur les différents canaux d’acquisition qui ont permis à ces utilisateurs d’arriver sur votre site web.
            </li>
            <li>
              <span>Comportement :</span>Données précisant le parcours ainsi que les interactions des visiteurs avec vos pages.
            </li>
            <li>
              <span>Conversions: </span>Données qui connectent les statistiques d’audience, d’acquisition et de comportement avec une/des conversion(s) que vous désignez (acte d’achat, abonnement à une newsletter…)
            </li>
          </ul>
        </div>
        <div className="ticsec7-2ndbottom">
          <p>
          La valeur ajoutée de l’outil Google Analytics, au-delà de collecter ces données, est de vous permettre de les croiser afin d’obtenir des statistiques riches sur une population d’utilisateurs très spécifique.
          </p>
          <div className="ticsec7-arrow">
          <FontAwesomeIcon icon="fa-solid fa-arrow-down" size="2xl" style={{color: "#ffffff",}} />
          </div>
          <p>
            <span>Par exemple : </span> Nous pourrions par exemple identifier combien de femmes, entre 25 et 34 ans, habitant à Paris, et qui sont arrivées sur notre site après avoir cliqué sur notre page Facebook, ont abandonné leur panier d’achats quand le montant de la livraison excédait 10 €.
          </p>
        </div>
      </div>
      <div className="ticsec7-right">
        <img src={Datatypes} alt="data type image" />
      </div>
    </div>
  );
};

export default Analyticsection7;
