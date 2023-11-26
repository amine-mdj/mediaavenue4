import './adssection2.css';
import Avatar1 from '../../img/avatar1.webp';
import Avatar2 from '../../img/avatar2.webp';
import Avatar3 from '../../img/avatar3.webp';

const Adssection2 = () => {
  return (
    <div className='adssec2'>
      <h1>QUELLE EST LA PROCÉDURE DE FACTURATION APPLIQUÉE PAR MEDIA AVENUE ?</h1>
      <hr/>
      <div className='adssec2-bottom'>
        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar1} alt="avatar1"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Basique</h2>
            <p>Si vous avez un budget compris entre
               <span> 1 400 € et 2 700 € par mois</span>,
               nous facturons 10 % du montant que vous dépensez.</p>
          </div>
        </div>

        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar2} alt="avatar2"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Premium</h2>
            <p>Si vous avez un budget compris entre
               <span> 2 700 € et 5 000 € par mois</span>,
               nous facturons 9 % du montant que vous dépensez.</p>
          </div>
        </div>

        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar3} alt="avatar3"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Entreprise</h2>
            <p>Si vous avez un budget
               <span> supérieur à 5 000 € par mois, </span> 
                nous facturons 7 % du montant que vous dépensez.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adssection2;