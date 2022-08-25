import React from 'react'
import SporcularCard from '../SporcularCard/SporcularCard'
import { useState, useEffect } from 'react'
import { createdAPIEndpoint, ENDPOINTS } from '../../api'

const SporcularContent = () => {
    const [sporcular, setSporcular] = useState();


    useEffect(() => {
        createdAPIEndpoint(ENDPOINTS.SPORCULAR).fetchAll()
            .then(res => {
                var sporcuList = res.data.data;
                setSporcular(sporcuList);
                console.log("sporcu listAAAA", sporcular);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center border-bottom border-top mb-4'>Sporcular</h1>
            <div className="container">
                <div className="row">

                    {sporcular && sporcular.map((sporcu) => {
                        return (
                            <div className='col-12 col-sm-6 col-md-6 col-xl-3 mb-4 d-flex justify-content-center'>
                                <SporcularCard sporcu={sporcu} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>



    )
}

export default SporcularContent