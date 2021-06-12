import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import axios from 'axios';

const Operation = (props) => {

    // function
    const [decisions, setDecision] = useState({
        stRoom: 0,
        clRoom: 0,
        delRoom: 0,
        suitRoom: 0,
    })

    const handleChange = (e) => {
        setDecision({...decisions, [e.target.name]: e.target.value})
        }

    const handleDecisions = (e) => {
        e.preventDefault();
        const decisions1 = {
            "stRoom": decisions.stRoom,
            "clRoom": decisions.clRoom,
            "delRoom": decisions.delRoom,
            "suitRoom": decisions.suitRoom,
        }
        let success2 = false;
        axios.post("http://localhost:3000/userDecisions", decisions1, undefined).then(function (response) {
            const status = response.status;
            if(status >=200){
                success2 = true;
            }
            if (success2) {
                alert("Decisions Saved")
            }else{
                alert("There has been an issue in the storing the decisions")
            }
            axios({
                method: 'get',
                url: 'http://localhost:3000/simulationCriteria',
            }).then(response => {
                const maxCustomerForStandardRoom = 25;
                const maxCustomerForClubRoom = 40;
                const maxCustomerForDeluxeRoom = 55;
                const maxCustomerForSuitRoom = 35;
                let totalNumberOfCustomers= 0;
                let result = "";
                if(parseInt(decisions1.stRoom) <= parseInt(response.data[0].maxPriceForStandardRoom)){
                     result += "Number of people bought standard room is " +maxCustomerForStandardRoom.toString() + "\n";
                     totalNumberOfCustomers += maxCustomerForStandardRoom;
                }else{
                    result +="Number of people bought standard room is " + (maxCustomerForStandardRoom-10).toString() + "\n";
                    totalNumberOfCustomers += maxCustomerForStandardRoom-10;
                }
                if(parseInt(decisions1.clRoom) <= parseInt(response.data[0].maxPriceForClubRoom)){
                    result += "Number of people bought club room is " +maxCustomerForClubRoom.toString() + "\n";
                    totalNumberOfCustomers += maxCustomerForClubRoom;
                }else{
                    result +="Number of people bought club room is " + (maxCustomerForClubRoom-10).toString() + "\n";
                    totalNumberOfCustomers += maxCustomerForClubRoom-10;
                }
                if(parseInt(decisions1.delRoom) <= parseInt(response.data[0].maxPriceForDeluxeRoom)){
                    result += "Number of people bought deluxe room is " +maxCustomerForDeluxeRoom.toString() + "\n";
                    totalNumberOfCustomers += maxCustomerForDeluxeRoom;
                }else{
                    result +="Number of people bought deluxe room is " + (maxCustomerForDeluxeRoom-10).toString() + "\n";
                    totalNumberOfCustomers += maxCustomerForDeluxeRoom-10;
                }
                if(parseInt(decisions1.suitRoom) <= parseInt(response.data[0].maxPriceForSuitRoom)){
                    result += "Number of people bought suit room is " +maxCustomerForSuitRoom.toString();
                    totalNumberOfCustomers += maxCustomerForSuitRoom;
                }else{
                    result +="Number of people bought suit room is " + (maxCustomerForSuitRoom-10).toString();
                    totalNumberOfCustomers += maxCustomerForSuitRoom-10;
                }
                alert(result)
                alert("Total number of customers who bought a room from your hotel is :" + totalNumberOfCustomers)
            })
        }).catch(function (error) {
            alert(error)
        });

    }
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
                <h1 align="center"> You can  submit your decisions in this page</h1>

                <Form className="operationsForm" name="operationForm"  onSubmit={handleDecisions}>
                    <h2>Pricing of the rooms</h2>
                    <h3>Assuming that you have using those channels which are listed below, please enter your pricing structure</h3>
                    <li>
                        <label htmlFor="range2">Club Room Pricing</label>
                        <input id="range2" name="stRoom" type="range" min="400" max="1200"  onInput={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="range2">Club Room Pricing</label>
                        <input id="range2" name="clRoom" type="range" min="400" max="1200"  onInput={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="range3">Deluxe Room Pricing</label>
                        <input id="range3" name="delRoom" type="range" min="400" max="1200"  onInput={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="range4">Suit Room Pricing</label>
                        <input id="range4" name="suitRoom" type="range" min="400" max="1200"  onInput={handleChange}/>
                    </li>
                    <button className="buttons" align="center" type="submit"> Submit</button>

                    <h2>Channel Management</h2>
                </Form>
                <li>
                    <input key={props.id}  type="checkbox" checked  />Booking.com
                </li>
                <li>
                    <input key={props.id} type="checkbox" checked />trivago.com
                </li>
                <li>
                    <input key={props.id} type="checkbox" checked/>hotels.com
                </li>
            </div>
        </div>
    );
};

export default Operation;
