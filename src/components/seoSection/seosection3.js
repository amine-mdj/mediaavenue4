import './seosection3.css'
import Checkbox from '../../img/checkbox.webp'

const Seosection3 = () =>{
    return(<div className='seosec3'>
      <div className='seosec3-left'>
        <h1>Nos Services de référencement offerts</h1>
        <hr/>
        <h2>1ère étape : Audit</h2>
        <div className='seosec3-outer'>
            <p>Notre service <b>d'audit SEO</b> comprend cinq types d'audits différents. En effectuant ces cinq audits, vous obtiendrez une vision complète de vos atouts et de vos lacunes en matière de référencement.</p>
            <p>Vous avez la possibilité de choisir l'audit SEO complet ou de sélectionner le type d'audit SEO qui convient le mieux à votre entreprise.</p>
            <p>Chaque type d'audit comporte plusieurs points à vérifier. Dans le rapport d'audit que nous vous fournirons à la fin de l'audit, vous trouverez des conseils pour améliorer votre référencement pour chaque point analysé.</p>
            <div className='seosec3-inner'>
             <p><span>Prix :</span> A partir de 225€/audit (225$),
              ou 750€/package (750$) (5 audits)</p>
             <p><span>Livraison :</span> 1 jours de travail / audit</p>
            </div>
        </div>
      </div>
      <div className='seosec3-right'>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Aide à la sélection des mots-clés : </span> 
Nous vous guidons dans la sélection des mots-clés les plus pertinents pour votre entreprise, ou nous approfondissons l'analyse de ceux que vous avez déjà choisis en évaluant leur pertinence, en les regroupant et en les cartographiant.</p>
            </div>
        </div>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit d'accessibilité et d'indexation : </span> Nous veillons à l'accessibilité optimale de votre site aux moteurs de recherche et aux visiteurs, tout en vérifiant l'indexation de vos pages dans les moteurs de recherche.</p>
            </div>
        </div>

        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit SEO on-page : </span> Nous analysons tous les aspects du contenu de vos pages et de la structure de votre site pour optimiser votre visibilité en ligne.</p>
            </div>
        </div>

        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit SEO off-page : </span>Nous analysons de près les paramètres du contenu de vos pages et de la structure de votre site afin de renforcer votre impact en dehors de votre site web.</p>
            </div>
        </div>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>
Audit SEO de vos concurrents : </span>
En nous appuyant sur les audits précédents, nous nous concentrons sur vos concurrents. Nous comparons leurs performances aux vôtres, identifions les opportunités pour vous démarquer et les surpasser.</p>
            </div>
        </div>
      </div>
    </div>)
}

export default Seosection3