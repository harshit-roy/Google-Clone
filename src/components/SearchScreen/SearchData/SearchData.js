import React from "react";
 const SearchData = ({googleData}) => {
    return(
        <div className="col-md-12 py-5">
            <p className="small text-dark">
                All
                {googleData.searchInformation.formattedTotalResult}
                result found in
                {googleData.searchInformation.formattedSearchTime}
                sec
            </p>
        </div>
    )
 };
 export default SearchData; 