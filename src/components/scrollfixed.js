import './scrollfixed.css'
import { useNavigate } from "react-router-dom";

const Scrollfixed = () =>{
    const navigate = useNavigate()

    const handlemove = (e) =>{
      const btn = document.querySelector('.scrollflexbutton');
      const x = e.pageX - btn.offsetLeft
      const y = e.pageY - btn.offsetTop
      btn.style.setProperty('--x', x + 'px')
      btn.style.setProperty('--y', y + 'px')
      console.log(x,y)
   } 


    const handleclick = ()=>{
        navigate('/multistep')
        window.scrollTo(0,0)
    }
return(<div className="scroll-fixed">
<div className="scroll-flex">
  <div className="scroll-flex-left">

  </div>
  <div className="scroll-flex-right">
  <button className='scrollflexbutton' onMouseMove={handlemove} onClick={(handleclick)} ><span>DÉMARRER UN PROJET</span></button>
  </div>
  
</div>
</div>)
}

export default Scrollfixed