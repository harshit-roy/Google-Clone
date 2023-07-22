import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchHeader = ({ searchTerm , setSearch, openVoiceSearch}) => {
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    setSearchText(searchTerm);
  }, [searchTerm]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.tesxt(searchText)) {
      setSearch(searchText);
    }
  };
  const handleButton = () => {
    if (/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)) {
      setSearch(searchText);
    }
  };
  const clearInput = () => {
    setSearchText("");
  };
  return (
    <div
      className="col-md-12 d-flex align-items-center"
      style={{ paddingTop: "1.5%", paddingBottom: ".5%" }}
    >
      <Link to={"/"} className="ms-5 mx-3">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Logo"
          height={30}
        />
      </Link>
      <div
        className=" px-3 col-md-5 d-flex align-items-center justify-content-between border border-secondary pe-3"
        style={{
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
        }}
      >
        <form style={{ width: "85%" }} onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control border-0 me-2 px-1"
            style={{ outline: "none", boxShadow: "none" }}
          />
        </form>
        {searchText ? (
          <i className="fa fa-times mx-1" style={{ cursor: "pointer" }} onClick={clearInput}></i>
        ) : null}
        <i
          className="fa-solid fa-microphone mx-1"
          style={{ cursor: "pointer" }}
          onClick={()=>openVoiceSearch()}
        ></i>
        <i
          className="fa-solid fa-magnifying-glass mx-1"
          onClick={handleButton} 
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <ul className="nav ms-auto me-5">
        <li className="nav-items">
          <a href="/" alt="apps" className="nav-link">
            <i className="fa fa-th" style={{ color: "black" }}></i>
          </a>
        </li>
        <li className="nav-items">
          <a href="/" alt="apps" className="nav-link">
            <i className="fa fa-user " style={{ color: "black" }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SearchHeader;
