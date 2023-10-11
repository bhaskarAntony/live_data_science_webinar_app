import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToastContainer autoClose={4000} position='top-right' />
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
