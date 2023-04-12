import React from "react";
import HomeScreen from "./HomeScreen";
import Navbar from "./Navbar";
const Home = ({setSearch}) => {
    return(
        <>
            <Navbar/>
            <HomeScreen setSearch ={setSearch}/>
        </>
    );
};

export default Home;