import React from 'react'
import Helmet from 'react-helmet'
import DeneyimForm from '../../components/Deneyim/DeneyimForm'
import DeneyimList from '../../components/Deneyim/DeneyimList'

const Deneyim = () => {
  return (
    <div>
      <Helmet>
        <title>Deneyimler</title>
      </Helmet>
      <div className="col-md-12">
        <DeneyimForm />
      </div>
      <div className="col-md-12">
        <DeneyimList />
      </div>
    </div>
  )
}

export default Deneyim
