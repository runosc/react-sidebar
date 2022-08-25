import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'

const SporcuList = () => {

  const [sporcular, setSporuclar] = useState();


  useEffect(() => {
    createdAPIEndpoint(ENDPOINTS.SPORCULAR).fetchAll()
      .then(res => {
        var sporcuList = res.data.data;
        setSporuclar(sporcuList);
         console.log("sporcu list", sporcuList);
      })
  }, [])

  function calculateAge(dogumTarihi) {
    if (dogumTarihi == null) {
      return "xxx"
    }
    const myArray = dogumTarihi.split("-", 3);
    var tarihGun = myArray[2].slice(0, 2);
    console.log("tarih", myArray[0], myArray[1], tarihGun)
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var todayMonth = todayDate.getMonth();
    var todayDay = todayDate.getDate();
    var age = todayYear - myArray[0];

    if (todayMonth < myArray[1] - 1) {
      age--;
    }
    if (myArray[1] - 1 == todayMonth && todayDay < tarihGun) {
      age--;
    }
    return age;
  }

  // const deneyimList = useSelector((state) => state.deneyim)
  // useEffect(() => {
  //   console.log(deneyimList)
  // }, [deneyimList])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>Diller</div>
            <div>
              <table className="table_bg table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Görsel</th>
                    <th scope="col">Ad</th>
                    <th scope="col">Soyad</th>
                    <th scope="col">Yaş</th>

                  </tr>
                </thead>
                <tbody>
                  {sporcular && sporcular.map((data,index) => {
                    return (
                    <tr key={index}>
                      <th scope='row'>{index}</th>
                      <th scope='row'><img  style={{ "width":50 ,"height":50 ,objectFit:'cover'}} src={"https://apipanel.performa.nz/api/Dosyalar/GetDosyaWithFkId/"+data.id }  alt="" /></th>
                      <th scope='row'>{data.ad}</th>
                      <th scope='row'>{data.soyad}</th>             
                      <th scope='row'>{calculateAge(data.dogumTarihi)}</th>




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

export default SporcuList
