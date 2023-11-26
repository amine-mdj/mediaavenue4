import './progsection5.css'
import Ecommerce from '../../img/ecommerce-website.webp'

const Progsection5 = ()=>{
    return(<div className='progsec5'>
        <h1>SITE E-COMMERCE </h1>
        <hr />
        <div className='progsec5-bottom'>
           <div className='progsec5-left'>
             <img src={Ecommerce}/>
           </div>
           <div className='progsec5-right'>
             <h2>Qu'est-ce qu'un site e-commerce ?</h2>
             <p>La création d’un site e-commerce pour votre entreprise est l’opportunité d’avoir une boutique ouverte 7j/7 et 24h/24.</p><p> Ainsi, vos clients peuvent réaliser leurs achats à tout moment ! La création d’un site e-commerce sur-mesure vous permet également de mettre en avant vos services et produits disponibles à la vente, et ainsi susciter l’intérêt des visiteurs.</p>
             <h2>Création de site e-commerce</h2>
             <p>Chez Media Avenue, nos équipes d’experts vous guident et vous accompagnent dans l’élaboration et la mise en place d’une solution e-commerce innovante et à votre image.</p><p> Chaque projet est réalisé en accord avec une stratégie digitale préalablement établie pour répondre à vos besoins.</p>
           </div>
        </div>
    </div>)
}

export default Progsection5