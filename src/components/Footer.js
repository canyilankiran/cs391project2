import React from 'react';

var style = {
    // backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "25px",
    position: "relative",
    left: "0",
    height: "auto",
}


function Footer() {
    return(
        <div className="footer">
            <div style={style}>
                <p> Creators: Can Yılankıran, Gökberk Arslantaş, Kıvanç Yılmaz</p>
                <p><a href="mailto:kader.sanligoz@ozu.edu.tr">For Contact</a></p>
                <a href="https://www.ozyegin.edu.tr/" target="_blank"> Özyegin University</a>
            </div>
        </div>
    )
}
export default Footer;