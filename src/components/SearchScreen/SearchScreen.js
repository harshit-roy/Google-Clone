import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

const SearchScreen = ({ searchTerm, googleData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm === " ") {
      navigate("/");
    }
  }, [searchTerm]);
  return (
    <>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <h1>Welcome to Search Screen : {searchTerm}</h1>
        </div>
      </div>
    </div>
    </>
  );
};
export default SearchScreen;
