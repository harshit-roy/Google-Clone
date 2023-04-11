import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/HomeScreen/Home";
import SearchScreen from "./components/SearchScreen/SearchScreen";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchScreen/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
