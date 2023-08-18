import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route ,} from 'react-router-dom';


function App() {
  const [ mode, setmode] = useState(`light`)    // wheather dark mode is enable or not 

  const toggleMode=()=>{
    if(mode===`dark`){
    setmode(`light`)
    document.body.style.backgroundColor = `white`
    document.title=`TEXT-UTILS - LIGHT MODE`;     //this will help you to change the title on according to you like this time when you press light mode ot show light mode on the title.
    }
    else{
      setmode(`dark`)
      document.body.style.backgroundColor = `#043742`
      document.title=`TEXT-UTILS - DARK MODE`;   

      setInterval(() => {
        document.title= `textutils is Amazing mode`   // we can change the title with this time interval fumction it display after 1 sec on the title palce or you can set time as per your need 
      }, 1500); 
    }
  }
//
  return (

   <>
   <Router>

   <Navbar title ="TEXT UTILS" mode={mode} toggleMode={toggleMode} about ="ABOUT US" HOME="HOME"/>         {/*we comment this code for using default props  */}
{/* <Navbar/>  we use this for run the default porps , but if we dont set defaultprops or we dont want to use so dont use this line of code . instead  of this use the above line of code . */}

<div className="container my-3 ">         {/*its bring our data in the middle of the page it is a class of bootstrap. and this my-3 is for bring space between your content or navbar */}
<Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to anylize" mode={mode} /> } />
        <Route exact path="/About" element={<About mode={mode}></About>} />
    </Routes>
 {/* <TextForm heading="Enter the text to anylize" mode={mode} />     here we pass the texform value or after this pass the heading by the props on the texform   */}


</div>
   </Router>
   </>
  )
};  

export default App;
