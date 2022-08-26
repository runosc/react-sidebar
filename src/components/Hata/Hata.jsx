import React from 'react'
import { useNavigate } from 'react-router'




const Hata = () => {
  const navigate = useNavigate();
  
  return (
    <div>
        <h1>Bu sayfa <b>kapalı</b> açmak için <b style={{cursor:'pointer'}} onClick={()=>{
          navigate(`/ayarlar`);
        }}> ayarlara</b> gidiniz</h1>
    </div>
  )
}

export default Hata