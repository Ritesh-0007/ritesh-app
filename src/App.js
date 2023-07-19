import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ALert from './components/ALert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route} from "react-router-dom";
function App() {


  // const [mode1,setMode1] = useState('red');

  // const toggleMode1 = () => {
  //   if(mode1 === 'red'){
  //     setMode1('yellow');
  //     document.body.style.backgroundColor = 'yellow';
  //     showAlert("Yellow Mode has been Enabled","success");
  //   }
  //   else{
  //     setMode1('red');
  //     document.body.style.backgroundColor = 'red';
  //     showAlert("Red Mode Has Been enabled","success");
  //   }
  // }

  const [mode,setMode] = useState('light') //weather dark mode is enable or not
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1300);
    
  }

  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#121212';
    showAlert("Dark Mode has been Enabled","success")
    document.title ='Ritesh App - Dark Mode';
    // setInterval(() => {
    //   document.title = 'Ritesh App is Amazing Mode';
    // },2000);
    // setInterval(() =>{
    //   document.title = 'Install Ritesh App';
    // },1500)
    }
    else{
      setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled","success")
    document.title ='Ritesh App - Light Mode';    
    }
  }

  return (
    
    <>

      {/* <Router> */}
    
       <Navbar title="Ritesh" aboutText="About us" mode={mode} toggleMode={toggleMode} /> {/*toggleMode1={toggleMode1}  */}
      <ALert alert={alert} />
      <div className="container my-3"> 
      {/* <Switch> */}
        {/* /users.--> component1
        /users/home.--> Component2 Thats why we use exact */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading = "Enter Text Below to Analyze" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>

      {/* </Router> */}
    
    </>

  );
}

export default App;
