import React from 'react';

const Header = () => {
    return (
<div>    
    <div style={{
        width: "100%",
        padding: "2.5em",
        margin:"auto",
        backgroundColor: "rgba(255, 255, 255)",
    }}>
        <h1 style={{
            fontWeight: "700"
        }}> HUSTLE UP:</h1>
        
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
</div>
    )
};

export default Header;