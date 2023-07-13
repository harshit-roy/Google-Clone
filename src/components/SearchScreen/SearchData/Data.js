import React from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  return (
    <div className="col-md-12">
      <Link to={data.displayLink}>
      {data.displayLink}
      </Link>
    </div>
  );
};
export default Data;
