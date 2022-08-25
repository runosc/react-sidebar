import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { setDilToggle } from '../../stores/site';

const Ayarlar = () => {
    const dispatch =useDispatch()
    const {dilToggleAyar}=useSelector(state =>state.site)
    console.log("dil Toggle",dilToggleAyar)
    localStorage.setItem('dilToggle',dilToggleAyar)
    console.log("locale Ayarlar" ,localStorage.getItem('dilToggle'))
    
    return (
        <div>
            {/* <Formik
                initialValues={{
                    dilToggle: false
                }}
                onSubmit={(toggleValues) => {
                    alert(JSON.stringify(toggleValues, null, 2));
                }}
            >
                {({ toggleValues }) => (
                    <Form>
                        <label>
                            <Field type="checkbox" name="dilToggle" />
                            Diller
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )}


            </Formik> */}
            
            <div className="d-flex p-5 align-items-center m-0">
            <p className='me-3'>Diller</p>
            <button onClick={()=> dispatch(setDilToggle())}>   
                    {dilToggleAyar ? 'Açık':'Kapalı'}
            </button>
            </div>
            


        </div>
    )
}

export default Ayarlar