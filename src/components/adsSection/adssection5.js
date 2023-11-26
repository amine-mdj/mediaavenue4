import './adssection5.css';
import Speakers from '../../img/speakers.webp';

const Adssection5 = () => {
  return (
    <div className='adssec5'>
      <div className='adssec5-left'>
        <h1>L'INTÉRÊT DES CAMPAGNES DE PUBLICITÉ EN LIGNE :</h1>
        <hr/>
        <p>Le déploiement de campagnes publicitaires en ligne revêt une importance stratégique, permettant de communiquer de manière efficace votre message aux clients potentiels, au moment et à l'endroit adéquats.</p><br/>
        <p>La nature de ce message doit être en parfait alignement avec vos objectifs marketing spécifiques.</p>
        <ul><br/>
          <li><span>Créer de la notoriété :</span> Adapté au lancement d'une nouvelle entreprise, d'un produit, ou à l'extension de votre activité vers de nouvelles régions.</li><br/>
          <li><span>Influencer la réflexion :</span> Cela devient d'importance lorsque votre produit ou service exige une sensibilisation des clients ou lorsque vous aspirez à créer une différenciation significative par rapport à la concurrence.</li><br/>
          <li><span>Inciter à l'action :</span> Cela devient cohérent lorsque vous visez des clients prêts à effectuer un achat ou lorsque vous faites la promotion d'un produit déjà établi.</li>
        </ul>
      </div>
      <div className='adssec5-right'>
        <img src={Speakers} alt='enceintes' />
      </div>
    </div>
  );
};

export default Adssection5;