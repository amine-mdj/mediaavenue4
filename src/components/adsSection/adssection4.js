import './adssection4.css';
import Whatis from '../../img/what-is-icon.webp';

const Adssection4 = () => {
  return (
    <div className='adssec4'>
      <div className='adssec4-left'>
        <img src={Whatis} alt="icône de qu'est-ce que c'est" />
      </div>
      <div className='adssec4-right'>
        <h1>LA PUBLICITÉ EN LIGNE : UNE STRATÉGIE MARKETING EFFICACE</h1>
        <hr/>
        <p>
La publicité en ligne constitue une stratégie marketing qui permet aux annonceurs de diffuser leurs messages promotionnels de manière précise sur Internet.</p><p> Son attrait croissant réside dans son modèle tarifaire distinct des médias traditionnels, offrant des résultats de campagnes hautement mesurables.</p>
      </div>
    </div>
  );
};

export default Adssection4;