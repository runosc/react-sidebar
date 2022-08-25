import React from 'react'
import './_egitim.scss'

const Egitim = () => {
  const color="270082"
  return (
    <div>
      <div className='colordeneme' style={{'--bgColor':`#${color}`}}></div>
    </div>
  )
}

export default Egitim