import './progsection9.css'
import Caracter from '../../img/character.webp'

const Progsection9 = ()=>{
    return(<div className='progsec9'>
        <div className='progsec9-left'>
            <img src={Caracter}/>
        </div>
        <div className='progsec9-right'>
            <div className='dis'>
            <h1>MAINTENANCE DE SITES WEB</h1>
            <hr/><br/><br/>
            <p>Sécuriser, corriger et mettre à jour votre site internet est une nécessité autant pour votre entreprise que pour vos clients.</p><br/><p> Un site ralenti et contenant des erreurs (liens hypertextes casés, pages d’erreur 404…) impacte les performances de votre site internet et donc en parallèle, l’image de votre entreprise. </p><br/>
            <p>Media Avenue, agence spécialisée dans la création de sites internet sur-mesure, vous accompagne et vous guide en vous proposant la solution la plus adéquate à votre situation et vos besoins. </p>
        </div>
        </div>
    </div>)
}

export default Progsection9