import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


const SearchHeader = ({searchTerm}) => {
  const [searchText,setSearchText] = useState('');
  useEffect(() => {
    setSearchText(searchTerm)
  },[searchTerm]);
  return (
    <div className="col-md-12 py-3 d-flex align-items-center">
      <Link to={"/"} className="mx-4">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google Logo"
            height={30}
        />
      </Link>
      <div className="col-md-8 d-flex">
        <form style={{width:'70%'}}>
          <input type="text" value={searchText} className="form-control"
            style={{outline:'none',boxShadow:'none'}}
          />
        </form>
      </div>
    </div>
  );
};
export default SearchHeader;
