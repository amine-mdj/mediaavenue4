import './adssection7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faMoneyBill, faEye, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Adssection7 = () => {
  return (
    <div className='adssec7'>
      <h1>CHOISIR LA STRATÉGIE D'ENCHÈRE OPTIMALE POUR VOTRE CAMPAGNE DE PUBLICITAIRE</h1>
      <hr/>
      <div className='adssec7-bottom'>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faArrowPointer} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les clics</h2>
          <p>
Vous avez la possibilité de cibler spécifiquement les clics générés par votre annonce en ligne, ce qui est particulièrement adapté si votre objectif principal est d'accroître le trafic vers votre site web. Dans ce cas, vous serez facturé à chaque clic sur votre annonce.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faMoneyBill} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les conversions</h2>
          <p>Vous avez la possibilité de concentrer votre stratégie d'enchères sur les conversions générées par votre annonce, ce qui est particulièrement approprié si vous visez à augmenter le nombre de visiteurs effectuant une action spécifique sur votre site web. Vous définirez le montant que vous êtes prêt à payer pour une conversion que vous déterminez, et le système optimisera automatiquement votre stratégie d'enchères au coût par clic (CPC) afin de maximiser le nombre de conversions dans le cadre de votre budget.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faEye} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les impressions</h2>
          <p>Vous avez la possibilité de focaliser votre stratégie d'enchère sur le nombre d'impressions que reçoit votre annonce en ligne. Cette approche est particulièrement appropriée si votre objectif principal est de renforcer la notoriété de votre marque. Vous paierez alors pour chaque affichage visible de votre annonce devant un utilisateur.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faCirclePlay} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les vues</h2>
          <p>Vous avez l'opportunité de mettre en avant les vues de votre vidéo en adaptant votre stratégie d'enchères. Cette démarche s'avère particulièrement adéquate lorsque votre publicité prend la forme d'une vidéo. Dans cette configuration, vous réglerez des frais à chaque visionnage ou interaction de votre vidéo par un utilisateur.</p>
        </div>
      </div>
    </div>
  );
};

export default Adssection7;