// import Header from './components/Header/Header'
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
        className='modalContent'
        overlayClassName='modalOverlay'
        isOpen={loginIsOpen}
      >
        <Login onClose={() => setLoginIsOpen(false)}/>
      </Modal>
      <Modal
        className='modalContent'
        overlayClassName='modalOverlay'
        isOpen={registerIsOpen}
      >
        <Register onClose={() => setRegisterIsOpen(false)}/>
      </Modal>
    </div>
  );
}

export default App;
