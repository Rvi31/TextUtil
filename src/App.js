
 import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(){
const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
const [alert, setAlert] = useState(null);

const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
     setAlert(null);
  }, 2000);
}

const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#0a4676';
  showAlert("Dark mode has been enabled", "seccess")
  document.title = 'TextUtil - Dark Mode';
}
else{
  setMode ('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "seccess")
  document.title = 'TextUtil - Light Mode';
}
}
  return(
    <>
    {/* <Navbar title="TextUtils" aboutText="About" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
          <About />
          </Route> 
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading ="Enter the text to analyze below" />
            
          </Route>
        </Switch>

        </div>
        </Router>
       
    {/* <About/> */}
   
  
  </>
  );
}

export default App;

