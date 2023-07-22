import logo from "./logo.svg";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/HomeScreen/Home";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import { searchData } from "./Api/GoogleSearch";
import VoiceSearch from "./components/VoiceSearch/VoiceSearch";

const App = () => {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [voiceSearch,setVoiceSearch] = useState(false);
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    Navigate("/search");
  };
const openVoiceSearch = () => {
  setVoiceSearch(true);
}
const closeVoiceSearch = () => {
  setVoiceSearch(false);
}
  return (
    <div className="App">
    {
      voiceSearch?
      <VoiceSearch closeVoiceSearch={closeVoiceSearch}/>
      :null
    }
    
      <Routes>
        <Route 
        exact 
        path="/" 
        element={<Home setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>} />
        {
          searchTerm !== "" ? 
          (<Route
            path="/search"
            element={
              <SearchScreen setSearch={setSearch} searchTerm={searchTerm} 
              googleData={googleData} openVoiceSearch={openVoiceSearch}/>
            }
          />
        ) : null
        }
        <Route path="/"/>
      </Routes> 
    </div>
  );
};

export default App;
