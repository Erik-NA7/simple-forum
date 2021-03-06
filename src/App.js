import loadable from '@loadable/component';
import Modal from 'react-modal';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { useState } from 'react';
import './App.css';

const Login = loadable(() => import('./components/Forms/Login'));
const Register = loadable(() => import('./components/Forms/Register'));

Modal.setAppElement('#root');

function App() {

  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  const loginHandler = () => {
    setLoginIsOpen(!loginIsOpen);
  };

  const registerHandler = () => {
    setRegisterIsOpen(!registerIsOpen);
  };

  return (
    <div className="App">
      <Header onLogin={loginHandler} onRegister={registerHandler}/>
      <Home className='main'/>
      <Login
        isOpen={loginIsOpen}
        onRequestClose={loginHandler}
        onClose={loginHandler}
      />
      <Register
        isOpen={registerIsOpen}
        onRequestClose={registerHandler}
        onClose={registerHandler}
      />
    </div>
  );
};

export default App;