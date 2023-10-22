import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpperClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setupMyText(newText);
    props.showAlert('Converted to uppercase', 'success');
  }
  
  const handleLowerClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setupMyText(newText);
    props.showAlert('Converted to lowercase', 'success');
  }
  
  const handleClearClick = ()=>{
    setupMyText('');
    props.showAlert('Text cleared', 'danger');
  }

  const handleReverseClick = ()=>{
    setupMyText(text.split(" ").reverse().join(" "));
    props.showAlert('Text Reversed!!', 'success');
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setupMyText(event.target.value);
  }

  const handleCopyText = ()=>{
    let areaText = document.getElementById('textFormBox');
    areaText.select();
    navigator.clipboard.writeText(areaText.value);
    props.showAlert('Copied to clipboard!!', 'success');
  }

  const handleExtraSpaces = ()=>{
    setupMyText(text.split(/[ ]+/).join(' '))
  }

  const [text, setupMyText] = useState('');
  return (
  <>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="textFormBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>Your text have {text.split(" ").length} words and {text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </>
  )
}
