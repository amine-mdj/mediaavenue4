import "./designsection2.css";
import Responsive from "../../img/responsive.webp";

const Designsection2 = () => {
  
  return (
    <div className="desec2">
      <h1>SITE WEB RESPONSIVE DESIGN (RWD)</h1>
      <hr />
      <div className="desec2-flex">
        <div className="desec2-left">
          <h2>Qu'est-ce qu'un design web responsive ?</h2>
          <p><b>Le Responsive Web Design (RWD)</b> Le terme Responsive design (RWD) définit le procédé par lequel une page web s’affiche de manière différente dépendant du format et de l’orientation de l’écran de l’appareil de l’utilisateur.</p>
          
          <p>Cette approche assure une expérience utilisateur homogène sur différents appareils, des ordinateurs de bureau aux smartphones.</p>
          <h2>Pourquoi devrais-je avoir un site web responsive ?</h2>
          <h3>
          Tout site web devrait avoir un responsive design.
          </h3>
          <p>
          Une part importante du trafic internet provient des appareils mobiles comme les smartphones et les tablettes.
          </p>
          <p>
          En 2016, Google a lancé l'indexation Mobile-first, indiquant que le moteur de recherche donne la priorité aux versions mobiles des sites web pour l'indexation.
          </p>
          <p>
          Ainsi, la conception responsive n'est plus un luxe mais une nécessité absolue, peu importe votre domaine d'activité.
          </p>
        </div>
        <div className="desec2-right">
          <img  src={Responsive} />
        </div>
      </div>
    </div>
  );
};

export default Designsection2;
