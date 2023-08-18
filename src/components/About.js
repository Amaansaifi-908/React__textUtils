import React from 'react'


export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#043742',
        backgroundColor:props.mode==='dark'?'#043755':'white',        
    }
return (

<div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2 className="container my-3 ">About Us</h2>
    <div className="accordion" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
   <strong>Analyze Your Text</strong>  
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body"style={myStyle}>
    <>TextUtils gives you a way to analyze your text quicaly and efficiently.Be it word count,chanracter count</> 
    </div>
</div>
</div>
<div className="accordion-item"style={myStyle}>
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <strong>Free To Use</strong>  
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <>TextUtils is a free characters counter tool that provides instant character count & words count statics for a given text. TextUtils reports the number of words and characters.Thus it is suitable for writing text with words/character limit. </>    </div>
</div>
</div>
<div className="accordion-item"style={myStyle}>
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed"style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <strong>Browser Compatible</strong>  
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suit to count character in Facebook, Blog, Books, Excel document, pdf document, Essay, etc.</>
    </div>
</div>
</div>
</div>
</div>
)
}
