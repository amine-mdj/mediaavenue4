import "./progsection6.css";
import Businesswebsite from '../../img/business-website.webp'

const Progsection6 = () => {
  return (
    <div className="progsec6">
      <h1>SITE VITRINE
      </h1>
      <hr />
      <div className="progsec6-bottom">
        <div className="progsec6-left">
          <h2>Qu'est-ce qu'un site vitrine ?</h2>
          <p>Un site web d'entreprise, également appelé site web commercial ou site vitrine, constitue une plateforme en ligne dédiée à informer les visiteurs sur l'activité d'une entreprise privée ou d'un commerce.</p>
          <h2>Pourquoi devrais-je avoir un site web d'entreprise ?</h2>
          <p>Le site vitrine d’une entreprise est la première porte d’entrée dans l’univers de la marque pour le prospect.</p><p> C’est pourquoi de plus en plus d’entreprises optent pour la création de sites internet vitrine sur-mesure.</p><p> Chez <b>Media Avenue</b>, nos experts connaissent l’importance de cette présence sur le web. C’est pourquoi notre équipe s’engage à vous proposer des sites créatifs et innovants. Vous avez la certitude d’être accompagné tout au long de la réalisation de votre projet.</p>
        </div>
        <div className="progsec6-right">
            <img src={Businesswebsite}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Progsection6;
