import './folioSection1.css'
import Chess from '../../img/hand-chess-2.webp'

const FolioSection1 = () =>{
    return(<div className='foliosec1'>
        <div className='foliosec1-flex'>
            <div className='folio-flex-left'>
                <h1>ILS ONT ÉTÉ STRATÈGES !</h1>
                <hr/>
                <p>En faisant appel à notre équipe de développeurs web, de designer web, et de spécialiste du marketing digital pour travailler sur leur projet.</p>
            </div>
            <div className='folio-flex-right'>
                <img src={Chess} alt='chess image'/>
            </div>
        </div>
    </div>)
}

export default FolioSection1