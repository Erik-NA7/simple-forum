import Header from './components/Header/Header'
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home className='main'/>
    </div>
  );
}

export default App;
