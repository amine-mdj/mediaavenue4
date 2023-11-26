import "./contactsection1.css";

const Contactsection1 = () => {
  return (
    <div className="ctsec1">
        <h1>NOUS ATTENDONS VOTRE MESSAGE AVEC IMPATIENCE</h1>
        <hr/>
        <div className="ct-wrapper">
      <div className="ctsec1-1">
        <input type="text" placeholder="Entreprise" /><br/>
        <input type="text" placeholder="Nom*" /><br/>
        <input type="text" placeholder="Email*" /><br/>
        <input type="text" placeholder="Mot de passe*" /><br/>
        <textarea placeholder="Message*" rows="8" /><br/>
      
        
        <button>ENVOYER</button>
      </div>
      <div className="ctsec1-2">
        <div>OU</div>
      </div>
      <div className="ctsec1-3">
        <p>
        En cliquant sur le bouton "Je lance mon projet", nous allons vous poser plusieurs questions afin de préciser votre besoin.
        </p>
        <p>
        Nous la traiterons ensuite et vous répondrons rapidement avec plus de détails sur la façon dont nous pouvons travailler ensemble.
        </p>
        <button>DÉMARRER UN PROJET</button>
      </div>
      </div>
    </div>
  );
};

export default Contactsection1;
