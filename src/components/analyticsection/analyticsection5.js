import './analyticsection5.css'
import Tools from '../../img/web-analytics-tool.webp'

const Analyticsection5 = ()=>{
  return(<div className='ticsec5'>
    <div className='ticsec5-left'>
      <h1>POURQUOI DEVRAIS-JE UTILISER UN OUTIL WEB ANALYTICS ?</h1>
      <hr/>
      <p>Gérer un site web sans analyser les données liées à sa consultation, c’est un peu comme gérer une entreprise sans s’intéresser à sa comptabilité. Les données liées à votre audience devraient être la base de réflexion de toute décision concernant votre site web.</p>
      <p>Ces données vous aident à identifier les opportunités de changement. Une fois le changement mis en place, elles vous permettent de mesurer l’impact qu’a eu ce dernier et d’initier, si nécessaire, des actions correctives.</p>
    </div>
    <div className='ticsec5-right'>
     <img src={Tools} alt="tools"/>
    </div>
  </div>)
}

export default Analyticsection5