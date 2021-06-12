import React from 'react';

const Operation = (props) => {
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
            <div>
                <h1 align="center"> You can find submit your decisions in this page</h1>
                <form className="operationsForm" name="myForm1" method="POST" action="" onSubmit="">
                    <h2>Pricing of the rooms</h2>
                    <li>
                        <label htmlFor="range1">Standard Room Pricing</label>
                        <input id="range1" value="0" name="stRoom" type="range" min="400" max="1200"
                               oninput="stRoomPrice.value = range1.value "/>
                        <output id="stRoomPrice"></output>
                    </li>
                    <li>
                        <label htmlFor="range2">Club Room Pricing</label>
                        <input id="range2" name="clRoom" type="range" min="400" max="1200"
                               oninput="clRoomPrice.value = range2.value "/>
                        <output id="clRoomPrice"></output>
                    </li>
                    <li>
                        <label htmlFor="range3">Deluxe Room Pricing</label>
                        <input id="range3" name="delRoom" type="range" min="400" max="1200"
                               oninput="delRoomPrice.value = range3.value "/>
                        <output id="delRoomPrice"></output>
                    </li>
                    <li>
                        <label htmlFor="range4">Suit Room Pricing</label>
                        <input id="range4" name="suitRoom" type="range" min="400" max="1200"
                               oninput="suitRoomPrice.value = range4.value "/>
                        <output id="suitRoomPrice"></output>
                    </li>
                        <button className="buttons" align="center" type="submit"> Submit</button>

                    <h2>Channel Management</h2>
                    <li>
                        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox"
                               checked={props.isChecked} value={props.value} />Booking.com
                    </li>
                    <li>
                        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox"
                               checked={props.isChecked} value={props.value}/>trivago.com
                    </li>
                    <li>
                        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox"
                               checked={props.isChecked} value={props.value}/>hotels.com
                    </li>
                    <button className="buttons" align="center" type="submit"> Submit</button>

                </form>
            </div>
        </div>
    );
};

export default Operation;
