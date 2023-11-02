import React, { useRef } from "react";

export default function Focusstate() {
  const myRef = useRef();
  const handleButtonClick = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
}
