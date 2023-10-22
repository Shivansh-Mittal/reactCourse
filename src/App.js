import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    <Navbar title='MextUtils' aboutUs='About' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3" >
      <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;