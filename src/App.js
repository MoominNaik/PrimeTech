import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AlarmSystems from './Components/Services/AlarmSystems/AlarmSystems.js'
import Home from './Pages/Home';
import Ask from './Pages/Ask';
import Footer from './Components/Footer/Footer';
import FeaturesNavbar from './Components/Navbar/FeaturesNavbar';

function App() {
  
  return (
    <><BrowserRouter>
      <Navbar/>
      <FeaturesNavbar/>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/Ask" element = {<Ask />}></Route>
        <Route path = "/AlarmSystems" element = {<AlarmSystems/>}> </Route>
        

      </Routes>
      <Footer/>
      </BrowserRouter> 
    </>
  );
}

export default App;

















/*
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');  // Set initial mode to 'light'

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} heading="Give me your text" />
      </div>
    </>
  );
}

export default App;
*/ 