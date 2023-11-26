import './designsection11.css'
import Restaurant from '../../img/restaurants2.webp'

const Designsection11 = () =>{

    const handlemove = (e) =>{
        const btn = document.querySelector('.desec11-btn-inner');
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
        console.log(x,y)
      }


    return(<div className='desec11'>
        <div className='desec11-left'>
            <img src={Restaurant} alt='image restaurant'/>
        </div>
        <div className='desec11-right'>
          <h1>DESIGN DE SITE WEB POUR LES RESTAURANTS</h1>
          <hr/>
          <p>Chez Media Avenue, l'écoute attentive de nos clients guide notre démarche, alliant leurs retours et notre expertise pour façonner des solutions novatrices. C'est ainsi que prend vie notre approche de design de sites web dédiée aux restaurants.</p>
          <p>Notre ambition est de fournir aux propriétaires et gestionnaires de restaurants des sites web spécifiquement élaborés pour présenter leur établissement de la manière la plus captivante aux clients potentiels.</p>
              <div className='desec11-btn'><button className='desec11-btn-inner' onMouseMove={handlemove}><span>LIRE LA SUITE</span></button></div>
          
        </div>
    </div>)
}

export default Designsection11