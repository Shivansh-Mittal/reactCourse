import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpperClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setupMyText(newText);
  }

  const handleLowerClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setupMyText(newText);
  }

  const handleClearClick = ()=>{
    setupMyText('');
  }

  const handleReverseClick = ()=>{
    setupMyText(text.split(" ").reverse().join(" "));
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setupMyText(event.target.value);
  }

  const [text, setupMyText] = useState('');
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="textForm" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleReverseClick}>Reverse Text</button>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Your text have {text.split(" ").length} words and {text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
