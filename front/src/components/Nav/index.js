import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <Link style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} to="/about">
              About Hustle
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: "black", marginLeft: "1rem"}} to="/about">
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
    <div id="logo" style={{
        width: "100%",
        padding: "2.5em",
        margin:"auto",
    }}>
        <h1 style={{
            fontWeight: "700"
        }}>HUSTLE UP:</h1>
        
        <h3 style={{
            fontWeight:"100"
        }}> Lights | Camera | Action</h3>
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
