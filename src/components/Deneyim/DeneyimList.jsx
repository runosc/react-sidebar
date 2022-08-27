import React, { useEffect, useState } from 'react'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';




const DeneyimList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [diller, setDiller] = useState();
  const [dilData,setDilData]=useState([]);
 
  




  const dilGetir = () => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).fetchAll()
      .then(res => {
        var dilList = res.data.data;
        setDiller(dilList);
        console.log("sporcu list", dilList);
      })
  }

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "Diller.xlsx");
  };

  useEffect(() => {
    dilGetir();
  }, [])
//seçilen dilin silinmesi
  const dilSil = (id) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).delete(id)
      .then(res => {
        console.log(res);
        dilGetir();

      })
      .catch(err => {
        //hata olunca çalışacak kod
      })
  }
//modal açılırken id yi alıp bilgileri getiriyor

 const dilModal=(id) => {
  createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).fetchById(id)
  .then(res =>{
    console.log("dilModal",res.data);
    setDilData(res);
    handleShow();
    console.log("dilData",dilData);
    // console.log("kritik",dilData.data.data.dilICon)
    // console.log("kritik isim",dilData.data.data.dilIsim)


  })
 }

 const dilGuncelle=(id) => {
  createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).update({

    id:id,
    dilIcon:values.dilIcon,
    dilIsim:values.dilIsim
  })
  .then(res =>{
    handleClose();
    dilGetir();
  })
 }



  // const deneyimList = useSelector((state) => state.deneyim)
  // useEffect(() => {
  //   console.log(deneyimList)
  // }, [deneyimList])

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,

  } = useFormik({
    initialValues: {
      dilIsim:dilData?.data?.data?.dilIsim,
      dilIcon:dilData?.data?.data?.dilIcon
    },
    enableReinitialize: true,

    onSubmit: (values, actions) => {
      console.log(errors)
      console.log(values)
      console.log(actions)
      console.log("values", values);
    },
  })
    // console.log("yether",values.dilIcon)
  return (
    <>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dil Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="form_bg"
              >
                <div className="row justify-content-center">
                  <div >
                    <div className="mb-3">
                      {/* Şirket Adı */}
                      <label
                        htmlFor="dilIsim"
                        className="form_label form-label"
                      >
                        Dil Adı
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dilIsim"
                        name="dilIsim"
                        // onChange={values.dilIsim}
                        value={values.dilIsim}
                        // value={dilData?.data?.data?.dilIsim}
                        // touched={dilData?.data?.data?.dilIsim}
                        // initialValues={dilData?.data?.data?.dilIsim}
                        // placeholder={dilData?.data?.data?.dilIsim}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      {/* Pozisyon Adı */}
                      <label
                        htmlFor="dilIcon"
                        className="form_label form-label"
                      >
                        Dil Icon
                      </label>
                      <input
                        id="dilIcon"
                        name="dilIcon"
                        type="text"
                        className="form-control"
                        // value={dilData?.data?.data?.dilIcon}
                        value={values.dilIcon}

                        onChange={handleChange}
                      />
                      
                    </div>
                    <div>
                      <button type="submit" className="btn btn-warning" onClick={()=> dilGuncelle(dilData.data.data.id)}>
                        Güncelle
                      </button>
                    </div>
                  </div>
                </div>
              </form>
        </Modal.Body>
      </Modal>

      <div className="container">

      <button onClick={()=>downloadExcel(diller)}>
    Download As Excel
</button>
        <div className="row">
          <div className="col-md-12">
            <div>Diller</div>
            <div>
              <table className="table_bg table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dil İsim</th>
                    <th scope="col">Dil Icon</th>
                    <th scope="col">Dil url</th>

                  </tr>
                </thead>
                <tbody>
                  {diller && diller.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope='row'>{index}</th>
                        <th scope='row'>{data.dilIsim}</th>
                        <th scope='row'><img style={{ "width": "35px" }} src={data.dilIcon} alt="" /></th>
                        <th scope='row'>{data.dilIcon}</th>
                        <th scope='row'>
                          <button className="btn btn-warning" onClick={() => {
                            dilModal(data.id)
                            }}>Düzenle</button>
                        </th>
                        <th scope='row'>
                          <button className="btn btn-danger" onClick={() => dilSil(data.id)}>Sil</button>
                        </th>





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

export default DeneyimList
