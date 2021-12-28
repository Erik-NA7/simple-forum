// import styled, { keyframes } from "styled-components";
import Login from '../Forms/Login'
import Modal from "react-modal";
import style from './Modal.css'
const FormModal = (props) => {
  
  <Modal
    className={{
      base: style['modalContent']
    }}

    overlayClassName={{
      base: style['modalOverlay']
    }}
    
    isOpen={props.isOpen}>
    <Login onClose={props.onColse}/>
  </Modal>
}

export default FormModal