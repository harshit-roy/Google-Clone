import React from "react";
import { Link } from "react-router-dom";

const SearchSubHeader = () => {
    return(
        <div className="container-fluid  border-bottom "> 
                <div className="col-md-6" style={{marginLeft:'8%'}}>
                    <ul className="nav">
                        <li className="nav-items">
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-search mx-1"></i>All
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-location mx-1"> </i>Maps
                            </Link>
                        </li>
                        <li className="nav-items" >
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-play mx-1" > </i>Videos
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-newspaper mx-1"> </i>News
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-image mx-1"> </i>Images
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to={"/"} className="d-flex align-items-center nav-link justift-content-between text-dark">
                                <i className="fa fa-bars mx-1"> </i>More
                            </Link>
                        </li>
                    </ul>
                </div>
            
        </div>
    )
}
export default SearchSubHeader;