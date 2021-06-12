import React from 'react';
import './tab.css';

const HotelInfo = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh',
                backgroundColor:"white",
                paddingTop: '10px',
                marginTop:'10px'
            }}
        >
            <div className="container">
                <h2 align="center"> You can find relevant information about your hotel below</h2>
                <p className="infos"> The hotel name is X. The hotel is located at Beşiktaş/İstanbul.
                    The current budget is 10.000 Turkish liras.There are 400 rooms in your hotel.
                    these results and your analysis. The are 4 types of rooms available in your hotel
                    about it, you can either change or keep your decisions for the next quarter.
                    <li>Standard Room (%60 of the total rooms)</li>
                    <li>Club Room (%25 of the total rooms)</li>
                    <li>Deluxe Room (%10 of the total rooms)</li>
                    <li>Suit Room (%5 of the total rooms)</li>
                </p>
            </div>
        </div>
    );
};

export default HotelInfo;
