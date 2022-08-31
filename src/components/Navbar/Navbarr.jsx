import React from 'react'
import "./_navbarr.scss"
import { AiOutlineSetting } from 'react-icons/ai'
import { IoMdColorPalette } from 'react-icons/io'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { VscColorMode } from 'react-icons/vsc'
import { useNavigate } from 'react-router'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode } from '../../stores/site'



const Navbarr = () => {
  const navigate = useNavigate();

  //Color ile ilgili değişkenler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [color, setColor] = useColor("hex", "#121212");
  // console.log("color", color.hex)

  const { dark } = useSelector((state) => state.site)
  // console.log("site aa", dark)
  const dispatch = useDispatch()
  //deneme


  return (
    <>
      <div className="nav_container background_color2" style={{ '--NavbarColor': `${color.hex}` }}>
        <h3 className='col-8'>Panel V3.00001</h3>



        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Color Picker</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ColorPicker width={456} height={358} color={color} onChange={setColor} hideHSV dark />
          </Modal.Body>
        </Modal>



        <div className='nav_set_icon  col-4 p-5'>
          {!dark? <MdDarkMode size={35} className="set_icon icon_color" onClick={() => dispatch(setDarkMode())}/>:
          <MdLightMode size={35} className="set_icon icon_color" onClick={() => dispatch(setDarkMode())}/>}


          <IoMdColorPalette size={35} className="set_icon icon_color mx-3" onClick={() => { handleShow() }} />

          <AiOutlineSetting size={35} className="set_icon  icon_color" onClick={() => { navigate(`/ayarlar`); }} />


        </div>

      </div>
    </>
  )
}

export default Navbarr