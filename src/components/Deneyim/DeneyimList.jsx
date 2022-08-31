import React, { useEffect, useState } from 'react'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDil } from '../../stores/dilGetir'
import {AiFillDelete,AiFillEdit,AiOutlineUserAdd} from 'react-icons/ai'





const DeneyimList = () => {
  const dispatch = useDispatch();
  const dilReduxGetir = useSelector((state) => state.dilGetir);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [diller, setDiller] = useState();
  const [dilData, setDilData] = useState([]);






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

  
  useEffect(() => {
    dispatch(fetchDil());
  }, [])
  //seçilen dilin silinmesi
  const dilSil = (id) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).delete(id)
      .then(res => {
        console.log(res);
    dispatch(fetchDil());
      

      })
      .catch(err => {
        //hata olunca çalışacak kod
      })
  }
  //modal açılırken id yi alıp bilgileri getiriyor

  const dilModal = (id) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).fetchById(id)
      .then(res => {
        console.log("dilModal", res.data);
        setDilData(res);
        handleShow();
        console.log("dilData", dilData);
        // console.log("kritik",dilData.data.data.dilICon)
        // console.log("kritik isim",dilData.data.data.dilIsim)


      })
  }

  const dilGuncelle = (id) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).update({

      id: id,
      dilIcon: values.dilIcon,
      dilIsim: values.dilIsim
    })
      .then(res => {
        handleClose();
        // dilGetir();
        dispatch(fetchDil());
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
      dilIsim: dilData?.data?.data?.dilIsim,
      dilIcon: dilData?.data?.data?.dilIcon
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
        <Modal.Header closeButton >
          <Modal.Title>Dil Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="text-dark">

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
                    className="form_label form-label text-dark"
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
                    className="form_label form-label text-dark"
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
                  <button type="submit" className="btn btn-warning" onClick={() => dilGuncelle(dilData.data.data.id)}>
                    Güncelle
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <div className="container">

        <button className='btn btn-success' onClick={() => downloadExcel(diller)}>
          Excelle İndir
        </button>
        <div className="row">
          <div className="col-md-12">
            <div>Diller</div>
            <div>
              <table className=" table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dil İsim</th>
                    <th scope="col">Dil Icon</th>
                    <th scope="col">Dil url</th>
                    <th scope='col'>
                      <button className='btn btn-success'>
                      <AiOutlineUserAdd/> Dil Ekle
                      </button>
                      
                      </th>

                  </tr>
                </thead>
                <tbody>
                  {/* <button onClick={() => {dispatch(fetchDil())}}>Dilleri Getir</button> */}

                  {dilReduxGetir.loading && 'Yükleniyor'}
                  {dilReduxGetir.error && dilReduxGetir.error}
                  {/* {console.log(dilReduxGetir.data)} */}

                {dilReduxGetir.data.data && dilReduxGetir.data.data.map((data,index) => {
                  
                    return (
                      <tr key={index}>
                        <th scope='row'>{index}</th>
                        <th scope='row'>{data.dilIsim}</th>
                        <th scope='row'><img style={{ "width": "35px" }} src={data.dilIcon} alt="" /></th>
                        <th scope='row'>{data.dilIcon}</th>
                        <th scope='row'>
                          <button className="btn btn-warning me-2" onClick={() => {
                            dilModal(data.id)
                          }}>
                            <AiFillEdit className='mx-1'/>
                            Düzenle</button>
                            <button className="btn btn-danger" onClick={() => dilSil(data.id)}>
                          <AiFillDelete className='mx-1'/>
                            Sil</button>
                        </th>
                      </tr>
                    )


                  })}


                  {/* 
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
                  })} */}

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
