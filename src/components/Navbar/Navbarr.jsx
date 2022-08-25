import React from 'react'
import "./_navbarr.scss"
import { AiOutlineSetting } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const Navbarr = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [color, setColor] = useColor("hex", "#121212");
  console.log("color",color.hex)
  //deneme


  return (
    <>
      <div className="nav_container "style={{'--NavbarColor':`${color.hex}`}}>
        <h3 className='col-5'>Navbar</h3>
        <div className="col-5">
          <button type="submit" className="btn btn-warning" onClick={() => handleShow()}>
            Renk seç
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Color Picker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ColorPicker width={456} height={358} color={color} onChange={setColor} hideHSV dark />
            </Modal.Body>
          </Modal>



        </div>
        <div className='nav_set_icon  col-2 p-5'><AiOutlineSetting size={35} className="set_icon" onClick={() => {
          navigate(`/ayarlar`);
        }} /></div>

      </div>
    </>
  )
}

export default Navbarr