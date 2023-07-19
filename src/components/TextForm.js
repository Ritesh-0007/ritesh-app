import React,{useState} from "react";

export default function TextForm(props) {
 
    const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
    }
    const handleCopy = () => {
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to ClipBoard Done","success");
    }
    const handleFirstCapital = (word) =>{
      let newText = text.toLowerCase();
      newText= text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("First Letter Capital Done","success");
    }
    const handleClear = () =>{
    let newText = ('');
    setText(newText);
    props.showAlert("Clear All Done","success");
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const[text,setText] = useState('Please Enter Text');
    


    return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'White':'#121212'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control white" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#121212':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear all</button>
          <button className="btn btn-primary mx-1" onClick={handleFirstCapital}>Capital first letter</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'White':'#121212'}} >
              <h1>
                Your text summery
              </h1>
              <p>{text.split(" ").length} Words and{text.length} Charachters</p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <h2>
                Preview
              </h2>
              <p>{text}</p>
          </div>
          </>
  );
}
