import React from "react";
import "./VoiceSearch.css";

const VoiceSearch = ({closeVoiceSearch}) => {
  return (
    <div className="container-fluid d-flex align-items-center 
    justify-content-center voiceModel">
      <div className="col-md-4 bg-light voice-search">
        <div className="border-bottom w-100 d-flex 
        align-items-center justify-content-between py-2 px-3 ">
          <h5>Voice Search</h5>
          <i className="fa-solid fa-xmark" onClick={()=>closeVoiceSearch()}></i>
        </div>
        <div className="w-100 h-50 d-flex align-items-center 
        justify-content-center">
            <div className="col-md-2 d-flex align-items-center 
            justify-content-center micIcon bg-danger text-white">
                <i className="fa fa-microphone"></i>
            </div>
        </div>
      </div>
    </div>
  );
};
export default VoiceSearch;
