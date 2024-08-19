import { useState } from "react";

function TitleInput(props) {
  const [mnameValue, setMnameValue] = useState("");
  const [ynameValue, setYnameValue] = useState("");

  const handleMname = (e)=>{
    setMnameValue(e.target.value);
  }
  const handleYname = (e)=>{
    setYnameValue(e.target.value);
  }

  return (
    <div className="input-container">
      <p>어르신께<input className="titleInput" value={mnameValue} onChange={handleMname}/>라고 불리고 싶어요</p>
      <p>어르신을<input className="titleInput" value={ynameValue} onChange={handleYname}/>라 부르고 싶어요</p>
    </div>
  );
}

export default TitleInput;