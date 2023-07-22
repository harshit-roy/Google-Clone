import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import SearchData from "./SearchData/SearchData";
const SearchScreen = ({ searchTerm, googleData, setSearch,openVoiceSearch}) => {
  const navigate = useNavigate();
  console.log(googleData);
  useEffect(() => {
    if (searchTerm === " "|| googleData === '{}') {  
      navigate('/');
    }
  }, [searchTerm]);
  return (
    <>
    <Header searchTerm={searchTerm} setSearch={setSearch} 
    openVoiceSearch={()=>openVoiceSearch()}/>
    <div className="container">
      <div className="row">
        <SearchData googleData={googleData}/>
      </div>
    </div>
    </>
  );
};
export default SearchScreen;
