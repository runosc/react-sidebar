import React from 'react'
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setDilToggle } from '../../stores/site';
import { sidebarUpdate } from '../../Helpers/sidebarHelper';
import Form from 'react-bootstrap/Form';


const Ayarlar = () => {
    const dispatch = useDispatch()
    const { dilToggleAyar } = useSelector(state => state.site)
    console.log("dil Toggle", dilToggleAyar)
    localStorage.setItem('dilToggle', dilToggleAyar)
    console.log("locale Ayarlar", localStorage.getItem('dilToggle'))

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

            {/* <div className="d-flex p-5 m-0 align-items-center">
                <h3 className='m-0'>Diller:</h3>
                <button className='btn btn-dark mx-2' onClick={() => {
                    dispatch(setDilToggle());
                    sidebarUpdate();
                    console.log(">>>>>>>>>>>>>>", localStorage.getItem("dilToggle"))

                }}>
                    {dilToggleAyar ? 'Açık' : 'Kapalı'}
                </button>
            </div> */}

            <Form className='p-5'>
                <Form.Check
                    className='mx-5'
                    checked={dilToggleAyar}
                    type="switch"
                    id="custom-switch"
                    label="Diller"
                    onChange={()=>{
                        dispatch(setDilToggle());
                        sidebarUpdate();
                        console.log(">>>>>>>>>>>>>>", localStorage.getItem("dilToggle"))
                    }}
                />
            </Form>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Diller</label>
            </div>



        </div>
    )
}

export default Ayarlar