import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'
import * as XLSX from 'xlsx';
import {BsFileEarmarkExcelFill} from 'react-icons/bs'


import { fetchDil } from '../../stores/dilGetir'
import { useDispatch } from 'react-redux';





const DeneyimForm = () => {
  const dispatch = useDispatch();

  const [deneyimler, setDeneyimler] = useState([])
  const [json, setJson] = useState([])


  // const deneyimList = useSelector((state) => state.deneyim)
  // const dispatch = useDispatch()
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const excelJson = XLSX.utils.sheet_to_json(worksheet);
        console.log(excelJson);
        setJson(excelJson);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  const yabanciDilEkle = (data) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).create(data)
      .then(res => {
        console.log(res);
        notify();
        dispatch(fetchDil());



      })
      .catch(err => {
        //hata olunca çalışacak kod
        toast.error('Errorr!!!!!', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }

      )

  }

  const topluYabanciDilEkle = (data) => {
    createdAPIEndpoint(ENDPOINTS.YABANCIDILLERTOPLU).create(json)
      .then(res => {
        console.log(res);
        notify();

      })
      .catch(err => {
        //hata olunca çalışacak kod
        toast.error('Errorr!!!!!', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }

      )
  }

  const notify = () => {
    toast.success('Başarılı!!!!!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      dilIsim: " ",
      dilIcon: " "
    },
    onSubmit: (values, actions) => {
      console.log(errors)
      console.log(values)
      console.log(actions)
      yabanciDilEkle({ dilIcon: values.dilIcon, dilIsim: values.dilIsim })
      console.log("values", values);

      // setTimeout(() => {
      //   console.log(JSON.stringify(values, null, 2))
      //   actions.resetForm()
      //   actions.setSubmitting(false)
      //   console.log(process.env.REACT_APP_API_URL)
      // }, 1000)
    },
    // validationSchema: DeneyimSchema,
  })

  return (
    <>
      <div>DeneyimForm</div>
      <button className="btn btn-danger" onClick={notify}>
        Notify
      </button>
      {errors && <p>{JSON.stringify(errors)}</p>}
      {deneyimler &&
        deneyimler.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>
        })}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="form_bg bg-dark"
              >
                <div className="form_title bg-dark border-light text-light">Dil Ekle</div>


                <div className="row justify-content-center">


                  <div className="col-md-6">
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
                        value={values.dilIsim}
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
                        value={values.pozisyon_adi}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-warning">
                      Gönder
                    </button>
{/* 
                    
                    <div className='d-flex mt-3'>
                      <button onClick={() => { topluYabanciDilEkle(json) }}
                        className="btn btn-success ">
                        Excel Ekle
                      </button>

                      <input
                        type="file"
                        name="upload"
                        id="upload"

                        onChange={readUploadFile}
                      />
                    </div> */}

                   

                  </div>


                </div>


              </form>
              <div className="input-group mb-3">
                    
                      
                      <input type="file" className="form-control" id="inputGroupFile02" onChange={readUploadFile}/>
                      <button onClick={() => { topluYabanciDilEkle(json) }}
                        className="btn btn-success input-group-item ">
                          <BsFileEarmarkExcelFill className='mx-1'/>
                        Excel Ekle
                      </button>
                       
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeneyimForm
