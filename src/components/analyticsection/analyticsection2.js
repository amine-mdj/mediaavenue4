import './analyticsection2.css'

const Analyticsection2 = ()=>{
  return(<div className='ticsec2'>
    <h1>NOS SOLUTIONS <br/> « WEB ANALYTICS »</h1>
    <hr/>
    <h2>Kit de démarrage: Google Analytics</h2>
    <div className='ticsec2-grid'>
     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>1</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Installation d'un code de suivi sur vos pages : </span>Nous intégrons dans la section en-tête de votre site le code nécessaire pour permettre à Google Analytics de recueillir les données de votre site de manière professionnelle.</p>
      </div>

     </div>
     <div className='ticsec2-item'>
      <div  className='ticsec2-left'>
        <p>2</p>
      </div>

      <div className='ticsec2-right'>
        <div>
        <p><span>Création de différentes vues :</span></p>
        <ul>
          <li>Vue « données brutes » : C’est la vue de base, qui récolte absolument toutes les données du site, sans aucun filtre. </li>
          <li>Vue « test » : C’est une vue tampon qui permet de tester les filtres et les nouveaux paramètres avant de les mettre en place sur une vue utilisateur.</li>
          <li>Vue « utilisateur » : C’est la vue que vous utilisez pour consulter les données de votre audience. Nous pouvons créer plusieurs vues utilisateurs afin que des utilisateurs spécifiques aient accès à des informations sélectionnées.</li>
        </ul>
        </div>
      </div>

     </div>
     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>3</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Exclusion de l’adresse IP de votre bureau et des robots de la vue utilisateur : </span>Vous ne souhaitez probablement pas mélanger les données qui proviennent de votre personnel ou de robots qui scannent votre site avec les données de vos clients potentiels. Nous excluons ces “visiteurs non-profitables” de votre vue utilisateur.</p>
      </div>

     </div>
     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>4</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Définition d’un plan de mesures : </span>Nous définissons ensemble les objectifs de votre site web, les KPI (indicateur clé de performance) qui permettent de mesurer le niveau d’atteinte de ces objectifs et un ensemble de données mesurables, extraites de Google Analytics, qui vont nourrir vos KPI.</p>
      </div>

     </div>

     

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>5</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Paramétrage du suivi de conversion (conversion tracking) : </span>Vous souhaitez certainement connaître plus précisément les utilisateurs qui convertissent sur votre site. Pour ce faire, nous paramétrons pour vous le suivi de conversion. Bien qu’il n’y ait aucune restriction sur ce que l’on peut définir comme étant une conversion, les plus couramment définies se déclenchent lorsqu’un visiteur réalise un achat, souscrit à votre newsletter ou vous contacte via votre formulaire de contact.</p>
      </div>

     </div>

     

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>6</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Mise en place de rapports personnalisés  :</span>Nous programmons l’envoi automatique d’un rapport personnalisé qui vous donne exclusivement accès aux informations que vous souhaitez surveiller régulièrement.</p>
      </div>

     </div>
    </div>
  </div>)
}

export default Analyticsection2