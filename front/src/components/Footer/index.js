import React from "react";

import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"

function Footer() {
    return (
        <footer style={{
            background: '#252525de', 
            color: '#D3D3D3', 
            textAlign: 'center', 
            fontSize: '9px', 
            padding: '12px',
            marginTop: '1000px',
            position: 'sticky',
            bottom: '0',
            width: '100%',
            height: '100px'}}>
        © Brenton Weaver Designs Inc.
        <br></br>
        <br></br>
        <img style={{width:"40px", margin:"10px"}} src={github} alt="logo for github"></img>
        <img style={{width:"40px", margin:"10px"}} src={instagram} alt="logo for instagram"></img>
        <img style={{width:"40px", margin:"10px"}} src={linkedin} alt="logo for linked in"></img>

        </footer>
    );
}

export default Footer;
