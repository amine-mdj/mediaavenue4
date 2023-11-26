import "./analyticsection6.css";
import Question from "../../img/website-analytics.webp";

const Analyticsection6 = () => {
  return (
    <div className="ticsec6">
      <div className="ticsec6-left">
        <img src={Question} alt='question image' />
      </div>
      <div className="ticsec6-right">
        <h1>QUELS OUTILS ANALYTIQUES PUIS-JE UTILISER SUR MON SITE WEB ?</h1>
        <hr />
        <p>
        Il existe une multitude d’outils web analytics disponibles sur le marché.</p>
        <p>
        Pour des besoins très spécifiques, il existe des outils analytiques spécialisés. Ceci étant dit, Google Analytics est L’outil que vous devriez utiliser car il permet probablement de couvrir 100% de vos besoins.
        </p>
        <p>
        De plus, il est totalement gratuit. Bien qu’il soit relativement facile de récupérer les informations basiques de votre site avec GA, la collecte d’informations croisées ou personnalisées demande une certaine expertise.
        </p>
      </div>
    </div>
  );
};

export default Analyticsection6;
