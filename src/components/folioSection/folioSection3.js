import './folioSection3.css'
import Foliogriditem from './Foliogriditem'
import Citronline from '../../img/citronline-thumbnail-picture1.png'

const FolioSection3 = () =>{

   const services = {
    citronline : ['Programmation web', 'Design web', 'web hosting']
   }

    return(<div className='foliosec3'>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       <Foliogriditem image={Citronline} title='citronline' services={services.citronline}/>
       
    </div>)

}


export default FolioSection3