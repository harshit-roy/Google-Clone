import React from "react";
import Data from "./Data";

const SearchData = ({googleData}) => {
  return (
    <div className="col-md-12 py-2" style={{fontSize:"15px"}}>
      <p className="small text-dark">
        All {googleData.searchInformation.formattedTotalResults} result found in{" "}
        {googleData.searchInformation.formattedSearchTime} sec
      </p>
      {
        googleData?.items.map((data,id) => (
            <Data data={data} key={id}/>
        ))
      }
    </div>
  );
};
export default SearchData;