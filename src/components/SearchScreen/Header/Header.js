import React from "react";
import SearchHeader from "./SearchHeader";
import SearchSubHeader from "./SearchSubHeader";

const Header = ({searchTerm, setSearch}) => {
    return(
        <>
            <SearchHeader searchTerm={searchTerm} setSearch={setSearch}/>
            <SearchSubHeader/>
        </>
    )
}
export default Header;