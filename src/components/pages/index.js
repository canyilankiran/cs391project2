import React from 'react';

const Home = () => {
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
                <h1 align="center">Welcome to hotel simulation</h1>
                <h2 align="center"> You can find relevant information about your hotel below</h2>
                <p className="infos"> Your are about to manage a 5-star hotel located in Beşiktaş/İstanbul. This hotel
                    has 400 rooms at
                    total and these rooms has 4 types which are
                    <b>standard,</b> <b>club,</b> <b>deluxe</b> and <b>suit</b>. Your initial budget is 10.000 turkish
                    liras. The
                    detailed information about the hotel is available at the <b>Hotel Info</b> tab. You are expected to
                    manage their
                    pricing mechanism in order to make maximum profit as you can.
                    Also, you have to manage channels to make your hotel reachable to different kind of customers from
                    different
                    nationalities and economic status. You can make these decisions about pricing and channel
                    managements at the <b>Operation</b>
                    tab.
                    The simulation will consist 1 year period(4 quarters). Decision you submit is only valid for 1
                    quarter. After
                    each quarter you are expected to analyze the results of your decisions at the <b>Report</b> tab,
                    according to
                    these results and your analysis
                    about it, you can either change or keep your decisions for the next quarter.</p>
            </div>
        </div>
    );
};

export default Home;
