import React from "react";

import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"

function Footer() {
    return (
        <footer style={{
            background: '#212229', 
            color: '#D3D3D3', 
            textAlign: 'center', 
            fontSize: '9px', 
            padding: '12px',
            bottom: '0',
            width: '100%',
            height: '150px'}}>
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
