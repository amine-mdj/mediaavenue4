import "./agencysection3.css";
import Dolls from "../../img/russian-dolls.webp";

const Agencysetion3 = () => {
  return (
    <div className="agsec3">
      <div className="agsec3-left">
        <h1>LA PHILOSOPHIE</h1>
        <hr />
        <p>
          Notre philosophie est que, quelle que soit votre taille, quel que soit votre budget, notre agence numérique a une solution adaptée à votre entreprise.
        </p><p>
        L’ampleur de vos besoins en termes de services digitaux est intimement liée à la taille de votre entreprise et à la nature de votre activité.
        </p>

        <p>
        Nous avons conçu notre offre digitale avec une grande flexibilité, afin de pouvoir élaborer une stratégie digitale parfaitement adaptée à vos objectifs commerciaux et dans les limites de votre budget. Cela nous permet de vous proposer une solution professionnelle et sur mesure pour atteindre vos objectifs dans le domaine numérique.
        </p>
      </div>
      <div className="agsec3-right">
        <img src={Dolls} />
      </div>
    </div>
  );
};

export default Agencysetion3;