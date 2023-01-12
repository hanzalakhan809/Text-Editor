
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
    setTimeout(() => {
      showalert(null, '');

    }, 2000);

  }

  const toggleTheme = () => {

    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#171a33";
      showalert("success", "Dark Mode Enabled")

    } else {
      setmode("light")
      document.body.style.backgroundColor = "#fff";
      showalert("success", "Light Mode Enabled")
    }
  }


  return (

    <>
      <Router>
        <Navbar title="Text Editor" mode={mode} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
       
        <Routes>
          <Route path="/" element={ <TextForm heading="TEXT CONVERTER" showalert={showalert} mode={mode} />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </>


  );
}

export default App;
