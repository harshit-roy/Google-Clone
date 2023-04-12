import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/HomeScreen/Home";
import SearchScreen from "./components/SearchScreen/SearchScreen";
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchScreen searchTerm={searchTerm}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
