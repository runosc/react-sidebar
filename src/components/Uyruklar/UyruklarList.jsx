import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'

const UyruklarList = () => {

  const [uyruklar, setUyruklar] = useState();


  useEffect(() => {
    createdAPIEndpoint(ENDPOINTS.UYRUKLAR).fetchAll()
      .then(res => {
        var uyruklarList = res.data.data;
        setUyruklar(uyruklarList);
         console.log("sporcu list", uyruklarList);
      })
  }, [])

  
 

  // const deneyimList = useSelector((state) => state.deneyim)
  // useEffect(() => {
  //   console.log(deneyimList)
  // }, [deneyimList])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>Uyruklar</div>
            <div>
              <table className="table_bg table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Bayrak</th>
                    <th scope="col">Uyruk Adı</th>
                    <th scope="col">Ülke Adı</th>
                    <th scope="col">Ülke Kısa Adı</th>
                    <th scope="col">Ülke Kod</th>


                  </tr>
                </thead>
                <tbody>
                  {uyruklar && uyruklar.map((data,index) => {
                    return (
                    <tr key={index}>
                      <th scope='row'>{index}</th>
                      <th scope='row'><img  style={{ "width":75 ,"height":50 ,objectFit:'cover'}} src={data.uyrukIcon }  alt="" /></th>
                      <th scope='row'>{data.uyrukAdi}</th>
                      <th scope='row'>{data.ulkeAdi}</th>             
                      <th scope='row'>{data.ulkeKisaAdi}</th>
                      <th scope='row'>{data.ulkeKod}</th>





                    </tr>

                    )
                  })}
                </tbody>

{/* 
                <tbody>
                  {deneyimList &&
                    deneyimList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{item.sirket_adi}</th>
                          <th scope="row">{item.pozisyon_adi}</th>
                          <th scope="row">{item.baslangic_tarihi}</th>
                          <th scope="row">{item.bitis_tarihi}</th>
                          <th scope="row">{item.aciklama}</th>
                          <th scope="row">{item.sehir}</th>
                        </tr>
                      )
                    })}
                </tbody> */}


              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UyruklarList
