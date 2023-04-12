import logo from "./logo.svg";
import {  Routes, Route, useNavigate, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/HomeScreen/Home";
import SearchScreen from "./components/SearchScreen/SearchScreen";
const App = () => {
  <Route>
  const Navigate = useNavigate();
  </Route>
   
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (term) => {
    setSearchTerm(term);
    Navigate('/search');
  };

  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm}/>} />
          <Route
            path="/search"
            element={<SearchScreen searchTerm={searchTerm} />}
          />
        </Routes>
      </div>
    
  );
};

export default App;
