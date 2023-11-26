import "./designsection3.css";
import Chameleon from "../../img/chameleon.webp";


const Designsection3 = () => {
  const imagestyle = {
    width: "90%",
    height: "80%",
  };
  return (
    <div className="desec3">
      <div className="upper-desec3">
        <h1>RESPONSIVE WEB DESIGN</h1>
        <hr />
        <h2>Nous développons des designs qui sont :</h2>
      </div>
      <div className="lower-desec3">
        <div className="lower-desec3_left">
          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Responsive</h2>
              </div>
              <div className="desec3-para"><p>
              
Cela peut sembler surprenant, mais il existe différents degrés de conception web responsive. Pour vous assurer que votre site est réellement adapté aux mobiles, utilisez l'outil de test des pages mobiles de Google. Cela vous permettra de vérifier l'efficacité de la version responsive de votre site.
              </p></div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Flexible</h2>
              </div>
              <div className="desec3-para">
              <p>
              La conception web responsive vise à s'assurer que votre site est parfaitement adapté à tous les formats d'écran et toutes les orientations, que ce soit sur un ordinateur de bureau, une tablette ou un smartphone. Cela garantit une expérience utilisateur optimale, quel que soit l'appareil utilisé.





</p>
              </div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Optimisé</h2>
              </div>
              <div className="desec3-para">
              <p>
              
Nous mettons en œuvre des techniques de compression, d'optimisation, de minification et exploitons toutes les ressources possibles pour améliorer les performances de votre site. Pour évaluer l'efficacité de ces mesures, testez la vitesse des pages mobiles de votre site web en utilisant des outils dédiés.
              </p>
              </div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Version <br/>Mobile</h2>
              </div>
              <div className="desec3-para">
              <p>
              Pour la version mobile, nous ne nous contentons pas de traduire votre site web de bureau ; nous le repensons et le réadaptons pour qu'il soit entièrement optimisé pour une utilisation sur appareils mobiles.
              </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="lower-desec3_right">
          <img  src={Chameleon} />
        </div>
      </div>
    </div>
  );
};

export default Designsection3;
