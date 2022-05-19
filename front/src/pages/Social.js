import React from "react";

import Post1 from "../components/cards/card";
import Post2 from "../components/cards/post2";
import Post3 from "../components/cards/post3";

function Social() {

    return (
    <div className="container" style={{
        backgroundColor: "white",
        padding: '32px',
        borderRadius: '5px',
        filter: "drop-shadow(0 0 0.5rem black)"}} >
        
        <h2>
        Check out collaborative projects in your area below!
        </h2>
        <div className="container" Style={{
                height: "30px",
                width: "80%",
                borderRadius: "5px",
                backgroundColor: "red",
                display: "flex",
            }}>
                <div id="cardsParent">
                    <div id="cards">
                        <Post1 />
                    </div>
                    <div id="cards">
                        <Post2 />
                    </div>
                    <div id="cards">
                        <Post3 />
                    </div>
                </div>

                <div/>
        </div>
    </div>
    )
};

export default Social;
