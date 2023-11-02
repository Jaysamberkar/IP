import React, { useState } from "react";

export default function Form() {
  const [text, settext] = useState("Enter your text here");
  const handleupclick = () => {
    console.log("uppercase");
    let newtext = text.toUpperCase();
    settext(newtext);
    window.confirm("confirm");
  };

  const handleOnChange = (event) => {
    console.log("change");
    settext(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          capatalize everything
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary btn-lg my-2"
          onClick={handleupclick}
        >
          Click to capatalize
        </button>
      </div>
    </div>
  );
}
