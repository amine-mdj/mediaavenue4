import './progsection1.css'
import Prog from '../../img/webagency2.webp'

const Progsection1 = ()=>{
    return(<div className='progsec1'>
        <div className='progsec1-left'>
            <img src={Prog}/>
        </div>
        <div className='progsec1-right'>
            <div className='progsec1-right-inner'>
            <div class='madman'>
            <h1>DÉVELOPPEMENT WEB</h1>
            <hr/><br/>
            <p>Nous développons des sites Web qui se caractérisent par leur <b>rapidité, leur facilité de modification et d'entretien, tout en étant parfaitement adaptés aux exigences des moteurs de recherche</b>.
</p>
</div>
                 </div>
        </div>
    </div>)
}

export default Progsection1