import React from "react";
import Data from "./Data";

const SearchData = ({googleData}) => {
  return (
    <div className="col-md-12 py-1">
      <p className="small text-dark">
        All {googleData.searchInformation.formattedTotalResults} result found in{" "}
        {googleData.searchInformation.formattedSearchTime} sec
      </p>
      {
        googleData?.items.map(data => (
            <Data data={data}/>
        ))
      }
    </div>
  );
};
export default SearchData;