import "./agencysection4.css";
import Taiwan from '../../img/taiwan.webp'

const Agencysetion4 = () => {
  return (
    <div className="agsec4">
      <div className="agsec4-left">
        <h1>L'EMPLACEMENT</h1>
        <hr />
        <p>Notre agence est située à Alger, Algérie.</p>
        <p>
        Nous avons implanté notre agence en Afrique car nous croyons qu’il existe de vraies opportunités dans cette partie du monde en termes de développement digital.
        </p>
        <p>Nous offrons également nos services à la clientèle française et francophone. Travailler avec nous, c’est travailler avec une équipe de culture française à des tarifs Algeriens.</p>
      </div>
      <div className="agsec4-right">
        <img src={Taiwan} />
      </div>
      <div></div>
    </div>
  );
};

export default Agencysetion4;