import React,{useState} from 'react'

export default function TextForm (props) {     // humne iske baad onchange function isleye likha use kiya tha kyuki wo console mai error dai raha tha
  const handleUpClick = ()=>{
   // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); // this is work when we press the button so this value appear or real value change
  }

const handleDwnClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText);
}

const handleOnChange = (event)=>{
//console.log("on changed")
setText(event.target.value)
}  

const downloadTxtFile = ()=>{
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });                                         // this function is for download our written text in the text file format.
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
}

const handleClearClick= ()=>{
  let newText = ``;                    // this is for clear all the text function 
  setText(newText)
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance(text);
  const toogle = document.getElementById("toggle");
  if ((toogle.textContent === "Speak")) {
    window.speechSynthesis.speak(msg);
    toogle.textContent = "Stop";
     //console.log("play");
  }                                        // this function is for speak and aconvert our text to speech  . 
  else {
    toogle.textContent = "Speak";
    window.speechSynthesis.cancel();
  // console.log("stop");
  }
};

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);   //this is for remove extra spaces 
  setText(newText.join(" "))
}

const handleCopy = ()=>{
 
  navigator.clipboard.writeText(text);
}
const[text, setText] =  useState(``);
  //text = "new value of text";  //this is the wrong way to change to state value.
 // setText ("new value of text"); // this is the right way to change the state value . 
  return (

    <> 
<div className='container'style={{color: props.mode===`dark`?`white`:`#043742`}}>
<h2>{props.heading} </h2>        {/*here we pass the heading through the props which we make in aap.js*/}
<div className="mb-3">
<textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#043742`}} value ={text} id="myBox" rows="5" placeholder="Enter your text here." ></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleDwnClick}> Lowercase</button>
<button className="btn btn-primary mx-1" onClick={downloadTxtFile}> Downlod</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}> clear</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle" > Speak</button>
</div>

<div className="container my-3 "style={{color: props.mode===`dark`?`white`:`#043742`}}>
  <h3> Your text summery </h3>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
  <p>{0.008 * text.split("").length } Minutes to read</p>
  <h2>Preview</h2>
<p>{text}</p>
</div>
    </>
  )
}
