import React from 'react';

var headerstyle = {
    // backgroundColor: "#F8F8F8",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    height: "100px",
    width: "100%",
}

function Header() {
    return (
        <div>
            <div style={headerstyle}>
                <h1>HotSim Hotel Simulation</h1>
            </div>
        </div>
    )
}

export default Header;