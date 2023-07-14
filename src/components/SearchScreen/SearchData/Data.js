import React from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  return (
    <div className="col-md-12">
      <Link to={data.formattedUrl} style={{color:"#252525", fontSize:"14px"}}>
        {data.displayLink} <i className="fa fa-angle-down"></i>
      </Link>
      <Link to={data.formattedUrl} style={{color:"blue"}}>
        <h4>{data.title}</h4>
      </Link>
      <p>{data.snippet}</p>
    </div>
  );
};
export default Data;
