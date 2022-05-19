import React from "react";

import Post1 from "../components/cards/card";
import Post2 from "../components/cards/post2";

// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';

function Social() {
    // const { data } = useQuery(QUERY_USER);
    //     let user;
    // if (data) {
    //     user = data.user;
    // }
    return (
    <div className="container" style={{
        backgroundColor: "white",
        padding: '32px',
        borderRadius: '5px',
        filter: "drop-shadow(0 0 0.5rem black)"}} >
        
        <p>
        Hey ,
        <br></br>
        <br></br>
        Check out some collaborative work in your area below!
        </p>
        <div className="container">
            <div Style={{
                height: "30px",
                width: "80%",
                borderRadius: "5px",
                backgroundColor: "red",
                display: "flex",
            }}>
                <div Style={{
                    alignItems: "flex-start",
                }}>
                <Post1 />
                <Post2 />
                </div>

                <div/>
            </div>
        </div>
    </div>
    )
};

export default Social;
