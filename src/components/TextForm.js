
import React , {useState} from 'react'


export default function TextForm(props) {
   const handleUpClick = ()=>{
    //    console.log("Uppercase was clicked" + text);
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Convertes to uppercase" , "success");
   }

   const handleLoClick = ()=>{
    //    console.log("Uppercase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Convertes to lowercase" , "success");
   }

   const handleClrClick = ()=>{
    //    console.log("Uppercase was clicked" + text);
       let newText = '';
       setText(newText);
   }

   const handleCopy = ()=>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpaces = ()=> {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
   }

   const handleOnChange= (event)=>{
    // console.log("On chamge");
    setText(event.target.value);
}

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new Text");// Correct way to change the state
  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}} >
     <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode==='dark'?'blackt':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary  mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary  mx-2 my-1" onClick={handleClrClick}>Clear Text</button>
<button className="btn btn-primary  mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary  mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container  my-3"  style={{color: props.mode==='dark'?'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter something in the textbox above to preview it here" } </p>
    </div>
    </>
  )
}
