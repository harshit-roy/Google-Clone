import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const SearchScreen = ({searchTerm,googleData}) => {
  const navigate = useNavigate();
  console.log(googleData);

  useEffect(() => {
    if(searchTerm === ''){
      navigate('/');
    }
  },[searchTerm]);
  return (
    <div className="Search_screen">
      <h1>Welcome to Search Screen : {searchTerm}</h1>
    </div>
  );
};
export default SearchScreen;
