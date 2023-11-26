import './progsection4.css'
import Webapp from '../../img/web-app.webp'

const Progsection4 = ()=>{
    return(<div className='progsec4'>
        <h1>APPLICATIONS WEB</h1>
        <hr/>
        <div className='progsec4-bottom'>
            <div className='progsec4-left'>

                <h2>Qu'est-ce qu'une application web ?</h2>

                <p>Une application web représente un logiciel opérationnel sur un serveur web plutôt que sur le système d'exploitation de votre ordinateur.</p><p> Parmi les exemples fréquents d'applications web, on compte les systèmes CRM (gestion de la relation client), les systèmes ERP (planification des ressources de l'entreprise), les plateformes de rencontres, les services de réservation, et les grandes plateformes de commerce électronique, entre autres.</p>
             
                <h2>Pourquoi devrais-je avoir une application web ?</h2>

                <p>Opter pour une application web s'avère judicieux si vous recherchez une plateforme en ligne adaptable, taillée sur mesure pour répondre à vos besoins spécifiques.</p><p> Les applications web offrent une flexibilité et une personnalisation optimales, répondant ainsi efficacement à vos exigences à long terme.</p>
            </div>
            <div className='progsec4-right'>
                <img src={Webapp} alt='web app'/>
            </div>
        </div>
    </div>)
}

export default Progsection4