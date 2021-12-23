import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Nav from "./component/Nav";


const Home = () => {
  return (
    <div>
      <div>
      <Nav/>
      <p >click this to get started</p>
      </div>
    <div>
    <Link to='/tables' >
    <div className="loader">
      
    </div>
    </Link>
    </div>
    </div>
  );
};

export default Home;
