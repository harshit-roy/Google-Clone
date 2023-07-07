import React from "react";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  return (
    <div className="col-md-12 py-3">
      <Link to={"/"} className="mx-4">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google Logo"
            height={30}
        />
      </Link>
    </div>
  );
};
export default SearchHeader;
