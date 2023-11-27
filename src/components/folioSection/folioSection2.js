import "./folioSection2.css";
import Stressed from '../../img/stressed-man.webp'

const FolioSection2 = () => {
  return (
    <div className="foliosec2">
      <div className="foliosec2-left">
        <div className="folio2-left-wrapper">
        <h1>IL FAUT FAIRE AUJOURD’HUI CE QUE TOUT LE MONDE FERA DEMAIN</h1>
        <hr />
        <p>
          Etablir et mettre en place une stratégie de marketing digital
          pertinenteest assez chronophage. Plus nous avons de temps à notre
          disposition, plus le résultat de notre travail est peaufiné.
        </p>
        <p>
          Toutefois, notre équipe de développeurs web, de designers web, et de
          spécialistes du marketing digital sait se surpasser et travailler sous
          pression.
        </p>
        <p>
          Nous savons aussi que l’atteinte de vos objectifs marketing est
          l’ultime finalité de toute stratégie digitale. Par conséquent, quel
          que soit le service digital sur lequel nous travaillons avec votre
          entreprise, nous gardons toujours à l’esprit l’objectif à atteindre et
          développons le projet en cohérence avec ce dernier.
        </p>
        <p>
          Comme vous l’avez probablement constaté avec notre portfolio, nous
          proposons une grande variété de services. Nous aimons les défis, mais
          nous connaissons également nos limites. Ainsi, nous ne nous engageons
          jamais dans des projets que nous ne maîtrisons pas totalement. Nous
          travaillons parfois avec des prestataires partenaires quand il s’agit
          de services relatifs à la rédaction web, la traduction, ou la
          conception graphique, etc… Cependant, quand le cas se présente, nous
          informons toujours nos clients et nous leur procurons un accès direct
          à notre partenaire.
        </p>
        <p>
          Depuis que nous avons ouvert notre agence digitale, nous avons eu
          l’opportunité de travailler avec des entreprises de toute taille. Nous
          comprenons que l’approche du marketing digital d’une PME est
          différente de l’approche d’une multinationale. Par conséquent, nous
          adaptons le périmètre des projets et l’étendue de nos services aux
          besoins de nos clients.
        </p>
        <p>
          Travailler avec nous commence toujours par la définition d’une
          stratégie cohérente, l’élaboration de la liste des tâches à réaliser,
          et la rédaction d’un devis. Cette première étape est gratuite et sans
          engagement. Il n’y a donc pas d’excuse, parlez-nous de votre projet
          dès aujourd’hui !
        </p>
        </div>
      </div>
      <div className="foliosec2-right">
        <img src={Stressed} alt='stressed man'/>
      </div>
    </div>
  );
};

export default FolioSection2;
