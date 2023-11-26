import "./adssection8.css";
import Target from "../../img/target.webp";

const Adssection8 = () => {
  return (
    <div className="adssec8">
      <div className="adssec8-left">
        <img src={Target} alt="image de cible" />
      </div>
      <div className="adssec8-right">
        <h1>LE CIBLAGE DE VOS CAMPAGNES, COMMENT ÇA MARCHE ?</h1>
        <hr />
        <ul>
          <li>
            <span>Ciblage par mots-clés :</span> Vous décidez des mots-clés sur lesquels vous voulez que votre annonce apparaisse.
          </li>
          <li>
            <span>Ciblage démographique :</span> Vous pouvez choisir de ne montrer votre annonce qu’aux personnes d’un certain sexe, ou d’une certaine tranche d’âge.
          </li>
          <li>
            <span>Ciblage géographique :</span> Vous pouvez paramétrer votre campagne Adwords pour qu’elle n’apparaisse que lorsqu’une personne se trouve dans une zone géographique que vous définissez
          </li>
          <li>
            <span>Ciblage horaire :</span> Vous pouvez indiquer les jours de la semaine et les heures du jour durant lesquels vous voulez que votre annonce soit diffusée.
          </li>
          <li>
            <span>Ciblage par appareil :</span> Vous pouvez montrer votre annonce en priorité aux personnes qui utilisent leur smartphone ou leur ordinateur fixe pour faire des recherches.
          </li>
          <li>
            <span>Ciblage d'audience :</span> Vous pouvez programmer votre publicité pour qu'elle soit visible uniquement par une selection d'individus groupés par affinités. Vous pouvez aussi faire en sorte que votre publicité soit visible uniquement par des utilisateurs qui sotn déjà venus sur votre site (remarketing).
          </li>
        </ul>
        <div className="adssec8-desc">
          <p>
            <span>Exemple :</span> Si vous avez un restaurant à Paris, vous pourriez décider de créer une annonce ciblant les utilisateurs entre 18 et 50 ans, présents dans un rayon de 2km autour de votre restaurant, publiée de lundi à vendredi entre 12 :00 et 14 :00, pour les personnes ayant fait une recherche avec les mots-clés « restaurant italien 15ème arrondissement ».

          </p>
        </div>
      </div>
    </div>
  );
};

export default Adssection8;