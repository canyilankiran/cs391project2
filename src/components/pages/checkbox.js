import React, {Component} from 'react'
import CheckBox from './CheckBox'

class checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otas: [
                {id: 1, value: "Booking.com", isChecked: false},
                {id: 2, value: "trivago.com", isChecked: false},
                {id: 3, value: "hotels.com", isChecked: false},
            ]
        }
    }

    handleAllChecked = (event) => {
        let otas = this.state.otas
        otas.forEach(otas => otas.isChecked = event.target.checked)
        this.setState({otas: otas})
    }

    handleCheckChieldElement = (event) => {
        let otas = this.state.otas
        otas.forEach(otas => {
            if (otas.value === event.target.value)
                otas.isChecked = event.target.checked
        })
        this.setState({otas: otas})
    }

    render() {
        return (
            <div className="App">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox" onClick={this.handleAllChecked} value="checkedall"/> Check / Uncheck All
                <ul>
                    {
                        this.state.otas.map((otas) => {
                            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...otas} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default checkbox