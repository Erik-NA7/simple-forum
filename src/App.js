import Header from './components/Header/Header';
import Home from './pages/Home';
import Modal from 'react-modal';
import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
import { useState } from 'react'
import './App.css';

Modal.setAppElement('#root')

function App() {

  const [loginIsOpen, setLoginIsOpen] = useState(false)
  const [registerIsOpen, setRegisterIsOpen] = useState(false)

  return (
    <div className="App">
      <Header onLogin={() => setLoginIsOpen(true)} onRegister={() => setRegisterIsOpen(true)}/>
      <Home className='main'/>
      <Modal
        className={{
          base: 'modalContent',
          beforeClose: 'modalContentOff'
        }}
        overlayClassName={{
          base: 'modalOverlay',
          beforeClose: 'modalOverlayOff'
        }}
        onRequestClose={loginIsOpen}
        isOpen={loginIsOpen}
        closeTimeoutMS={790}
      >
        <Login onClose={() => setLoginIsOpen(false)}/>
      </Modal>
      <Modal
       className={{
        base: 'modalContent',
        beforeClose: 'modalContentOff'
        }}
        overlayClassName={{
          base: 'modalOverlay',
          beforeClose: 'modalOverlayOff'
        }}
        onRequestClose={registerIsOpen}
        isOpen={registerIsOpen}
        closeTimeoutMS={790}
      >
        <Register onClose={() => setRegisterIsOpen(false)}/>
      </Modal>
    </div>
  );
}

export default App;
