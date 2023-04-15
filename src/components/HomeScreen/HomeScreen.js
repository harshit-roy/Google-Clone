import React, { useState } from "react";

const HomeScreen = ({setSearch}) => {
  const [input, setInput] = useState("");
  const handleSubmit =(e) => {
    e.preventDefault();
    if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
      setSearch(input)
    }
  }
  const handleButton =() => {
    if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
      setSearch(input)
    }
  }
  const clearInput =() => {
    setInput('');
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 d-flex flex-column align-itms-center justify-content-center mt-5">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Icon"
            className="mx-auto my-3 mt-5"
          />
          <div className="formDiv col-md-5 mx-auto my-2 d-flex align-items-center border justify-content-between">
            <i className="fa fa-search mx-1 ms-3"></i>
            <form style={{ width: "100%" }} className="mx-2" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control border-0"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                style={{
                  boxShadow: "none !important",
                  outline: "none !important",
                }}
              />
            </form>
            {input ? <i className="fa fa-times mx-1" style={{cursor:"pointer"}} onClick={clearInput}></i> : null}
            <button type="button" className="btn mx-1">
              <i className="fa fa-microphone"></i>
            </button>
          </div>
          <div className="btns mx-auto text-center mt-3">
            <button type="button" className="btn btn-default border mx-1" onClick={handleButton}>Google Search</button>
            <button type="button" className="btn btn-default border mx-1">Feeling Lucky</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
