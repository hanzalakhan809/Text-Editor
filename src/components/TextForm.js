import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const UpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    console.log(text);
    props.showalert("success","Converted into uppercase");
  };
  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const sentenceCase = () => {
    let collectChar = [];
    let splitIntoChar = text.split(" ");
    splitIntoChar.forEach((element) => {
      let lowerCase = element.toLowerCase();
      let firstCharUpper = element.toUpperCase();
      let sentenceChar = lowerCase.replace(lowerCase[0], firstCharUpper[0]);
      collectChar.push(sentenceChar);
    });
    let sentenceText = collectChar.join(' ')
    setText(sentenceText);


  };
  const clearText = () => {
    let clearText = "";
    setText(clearText);
  };

  return (
    <div className= {`my-3 container text-${props.mode === "dark" ? "light" : "dark"}`} >
      <center>
        <h1 >{props.heading}</h1>
      </center>
      <textarea
        className={`form-control bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"} `}
        id="exampleFormControlTextarea1"
        rows="10"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <button
        type="button "
        className="btn btn-primary  my-4"
        onClick={UpperCase}
        
      >
        Convert to Upper Case
      </button>
      <button
        type="button "
        className="btn btn-primary  my-4 mx-2"
        onClick={clearText}
      >
        Clear
      </button>
      <button
        type="button "
        className="btn btn-primary my-4"
        onClick={lowerCase}
      >
        Convert to Lower Case
      </button>
      <button
        type="button "
        className="btn btn-primary my-4"
        onClick={sentenceCase}
      >
        Convert to Sentence Case
      </button>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text === '' ? 0 : text.split(' ').length} words & {text.length} character</p>
        <h1>preview</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
