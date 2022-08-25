import React from 'react'
import "./_navbarr.scss"
import {AiOutlineSetting} from 'react-icons/ai'
import { useNavigate } from 'react-router'
const Navbarr = () => {
    const navigate = useNavigate();

 
  return (
   <>
   <div className="nav_container">
   <h3 className='col-10'>Navbar</h3>
   <div className='nav_set_icon  col-2 p-5'><AiOutlineSetting size={35} className="set_icon" onClick={()=>{
    navigate(`/ayarlar`);
   }}/></div>

   </div>
   </>
    )
}

export default Navbarr