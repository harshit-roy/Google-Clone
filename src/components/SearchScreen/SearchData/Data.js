import React from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  return (
    <div className="col-md-12">
      <Link to={data.displayLink}>
      <h7>{data.displayLink}{" "}
      <i className="fa fa-angle-down"></i></h7>
      </Link>
      <Link to={data.formattedUrl}>
      <h4>
      {data.title}
      </h4>
      </Link>
      <p>{data.snippet}</p>
    </div>
  );
};
export default Data;
