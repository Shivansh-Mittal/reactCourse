import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title='MextUtils' aboutUs='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;