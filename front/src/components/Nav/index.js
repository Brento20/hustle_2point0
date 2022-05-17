import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none', 
  color: "black", 
  marginLeft: "1rem"
}

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link style={{...linkStyle}} to="/about">
              About Hustle
            </Link>
          </li>
          <li className="mx-1">
            <Link style={{...linkStyle}} to="/orderHistory">
              My Kit
            </Link>
          </li>
          <li className="mx-1">
            <Link style={{...linkStyle}} to="/social">
              Get Gigs
            </Link>
          </li>
          <li className="mx-1">
            <a style={{...linkStyle}} href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link style={{...linkStyle}} to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link style={{...linkStyle}} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link style={{...linkStyle}} to="/about">
              About Hustle
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="flex-row px-1" style={{background: 'white', transform: "skewY(-3deg)", border: '3px solid white'}}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: "black"}}>
        <header>    
    <div style={{
        width: "100%",
        padding: "0.5em",
        margin:"auto",
    }}>
      
        <h1>HUSTLE:</h1>
        
        <h3> Lights | Camera | Action</h3>
    </div>

    <div style={{
        position: "absolute",
        right: "10%",
        fontWeight: "300",

    }}> 
    </div>
</header>
          
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </div>
  );
}

export default Nav;