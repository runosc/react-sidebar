import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { createdAPIEndpoint, ENDPOINTS } from '../../api';
import SporcularCard from '../SporcularCard/SporcularCard'


const SporcuProfil = () => {
    const params = useParams();
    const [sporcuBilgi, setSporcuBilgi] = useState();

    useEffect(()=> {
  
        console.log("params.id",params.id)
        console.log("1. useEffect ÇALIŞTI!!")
        createdAPIEndpoint(ENDPOINTS.SPORCUBILGILER).fetchById(params.id)
        .then(res=>{
          console.log("res.data",res.data)
          if(res.data.data != null){
            var sporcuBilgiList = res.data.data;
            setSporcuBilgi(sporcuBilgiList);
            console.log(sporcuBilgiList);
            console.log("sporcubilglist nuldan farklı ÇALIŞTI!!")
          }
           
          console.log("2. useEffect ÇALIŞTI!!")
          console.log(sporcuBilgiList);
         
        })
      },[params.id])
    

    return (
        <div>
            <div className="row">
                <div className="col-4">
                    AAA
                </div>
                <div className="col-4 d-flex justify-content-center">
                    {sporcuBilgi && <SporcularCard sporcu={sporcuBilgi?.genelBilgi}/>}
                    {/* <SporcularCard sporcu={sporcuBilgi?.genelBilgi}/> */}
                </div>
                <div className="col-4">
                    AAA
                </div>
            </div>
        </div>
    )
}

export default SporcuProfil