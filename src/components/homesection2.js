import Homegriditem from './homegriditem'
import './homesection2.css'

//--------------images

import Design from '../img/web-design.webp'
import Programming from '../img/programing.webp'
import Seo from '../img/seo.webp'
import Analytics from '../img/web-analytics.webp'
import Ads from '../img/ads.webp'
import Securite from '../img/securite.webp'
import Reputation from '../img/reputation.webp'
import Mobile from '../img/mobile apps.webp'


const Homesection2 = () =>{
    const description = {
         design:"Notre équipe de Développeurs Web conçoit des sites internet et applications à l'esthétique raffinée et captivante, alliant fonctionnalité et créativité.",
         mobile:"Conception d'applications mobiles pour Android et iOS, alliant intuitivité et performance, pour fournir une expérience utilisateur remarquable et fluide.",
        prog:"Développement de sites Web rapides et optimisés pour un référencement efficace sur les moteurs de recherche, adaptés à divers secteurs industriels.         .",
        secu:"Déploiement de protocoles de sécurité avancés pour assurer la protection intégrale des données de votre entreprise, renforçant ainsi la confiance de vos clients.",
        seo:"Optimisation conçue pour renforcer le classement et lza visibilité de votre Entreprise et/ou Site Web, conduisant à un accroissement notable de votre clientèle.",
        analytics:"Emploi d'outils d'analyse de pointe pour élaborer des stratégies optimisées, fondées sur des données précises, afin d'améliorer les performances.",
        reputation:"Mise en place d'une surveillance et d'une gestion proactive de votre réputation en ligne, assurant ainsi le maintien et la promotion d'une image positive.",
        ads:'Conception de campagnes publicitaires ciblées, visant à accroître la visibilité et les ventes de votre entreprise, tout en optimisant votre retour sur investissement.'
        
    };
    const link = {
        descriptions:"agency",
        mobiles:"Conception d'applications mobiles pour Android et iOS, alliant intuitivité et performance, pour fournir une expérience utilisateur remarquable et fluide.",
       progs:"Développement de sites Web rapides et optimisés pour un référencement efficace sur les moteurs de recherche, adaptés à divers secteurs industriels.         .",
       secus:"Déploiement de protocoles de sécurité avancés pour assurer la protection intégrale des données de votre entreprise, renforçant ainsi la confiance de vos clients.",
       seos:"Optimisation conçue pour renforcer le classement et lza visibilité de votre Entreprise et/ou Site Web, conduisant à un accroissement notable de votre clientèle.",
       analyticss:"Emploi d'outils d'analyse de pointe pour élaborer des stratégies optimisées, fondées sur des données précises, afin d'améliorer les performances.",
       reputations:"Mise en place d'une surveillance et d'une gestion proactive de votre réputation en ligne, assurant ainsi le maintien et la promotion d'une image positive.",
       adss:'Conception de campagnes publicitaires ciblées, visant à accroître la visibilité et les ventes de votre entreprise, tout en optimisant votre retour sur investissement.'
       
   };
    return (<div className='hmsec2'>
              <Homegriditem title='Web design' link='creation' description={description.design} img={Design} />
              <Homegriditem title='La programmation web' link='programmation' description={description.prog} img={Programming} />
              <Homegriditem title="Applications Mobiles" description={description.mobile} img={Mobile} />
              <Homegriditem title="Sécurité Web" description={description.secu} img={Securite} />
              <Homegriditem title='Stratégie de Référencement SEO' link='strategie' description={description.seo} img={Seo} />
              <Homegriditem title='Analyse de Données' link='analyse' description={description.analytics} img={Analytics} />
              <Homegriditem title='Gestion de Réputation' description={description.reputation} img={Reputation} />
              <Homegriditem title='Publicité en Ligne' link='publicité' description={description.ads} img={Ads} />
        </div>)
}

export default Homesection2