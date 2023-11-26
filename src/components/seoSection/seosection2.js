import "./seosection2.css";
import Seoteam from '../../img/seo-team.webp'

const Seosection2 = () => {
  return (
    <div className="seosec2">
      <div className="seosec2-left">
        <img src={Seoteam} alt='seo team' />
      </div>
      <div className="seosec2-right">
        <h1>DES EXPERTS EN STRATÉGIES DE RÉFÉRENCEMENT QUI VOUS FONT DOMINER LE WEB</h1>
        <hr />
        <p>
        Media avenue est une équipe d’experts qui vous conseille, vous accompagne, 
		et vous garantit des résultats concrets et mesurables. 
        </p>
        <p>
        Notre agence optimise votre site web avec les techniques et les outils les plus performants, 
		et vous fait gagner en visibilité et en notoriété sur les moteurs de recherche. 
        </p>
        <p>
        Nous vous offrons un service personnalisé et adapté à votre secteur d’activité, 
		à votre cible, et à votre budget.
        </p>
      </div>
    </div>
  );
};

export default Seosection2;
