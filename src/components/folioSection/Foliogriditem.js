import './foliogriditem.css'

const Foliogriditem = ({image, title, services}) =>{
  return (<div className='image-grid' style={{backgroundImage:`url(${image})`}}>
    <div className='hover-grid'>
      <h1>{title}</h1>
      <p>{services[0]}</p>
      <p>{services[1]}</p>
      <p>{services[2]}</p>
      <button>Plus sur ce cas</button>
      </div>
  </div>)
}

export default Foliogriditem