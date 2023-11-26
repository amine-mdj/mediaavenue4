import './adssection1.css';
import Awards from '../../img/awords-agency.webp';

const Adssection1 = () => {
  return (
    <div className='adssec1'>
      <div className='adssec1-left'>
        <img src={Awards} alt='Récompenses' />
      </div>
      <div className='adssec1-right'>
        <h1>VOTRE AGENCE DE RÉFÉRENCEMENT PAYANT</h1>
        <hr/>
        <p>La mise en place de campagnes publicitaires en ligne est au centre de notre approche, visant à cibler de manière précise les visiteurs pertinents sur les plateformes appropriées. Nous optimisons rigoureusement ces campagnes afin de maximiser le nombre de clics et de conversions, le tout en respectant scrupuleusement le budget que vous avez défini.</p>
      </div>
    </div>
  );
};

export default Adssection1;