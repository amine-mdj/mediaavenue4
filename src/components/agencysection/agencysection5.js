import "./agencysection5.css";
import Pineapple from "../../img/pineapple.webp";

const Agencysetion5 = () => {
  return (
    <div className="agsec5">
      <div className="agsec5-left">
        <img src={Pineapple} />
      </div>
      <div className="agsec5-right">
        <h1>POURQUOI MEDIA AVENUE ?</h1>
        <hr />
        <p>
          Pourquoi pas ? Les ananas sont exotiques, délicieux et procurent une grande énergie !
        </p>
        <p>
          En réalité, il y a plus que ça. Le son du mot chinois pour ananas est proche du son de "la bonne chance vient vers vous", c'est pourquoi l'ananas est devenu un symbole traditionnel populaire du feng shui de la richesse, de la chance et de la prospérité.
        </p>
        <p>Voilà tout ce que nous souhaitons à nos clients.</p>
      </div>
    </div>
  );
};

export default Agencysetion5;