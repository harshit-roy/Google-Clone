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
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    Navigate("/search");
  };

  return (
    <div className="App">
    <VoiceSearch/>
      <Routes>
        <Route 
        exact 
        path="/" 
        element={<Home setSearch={setSearch} />} />
        {
          searchTerm !== "" ? 
          (<Route
            path="/search"
            element={
              <SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} />
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
