import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div style={{background: 'white', padding: '32px', borderRadius: '5px'}}>
      <Jumbotron>
        <h2>404 Page Not Found</h2>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
