import React from "react";
import { RiResetRightLine } from "react-icons/ri";
import "./Counterapp.css";
class Counterapp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    // increment
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    // decrement
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    // reset
    handleReset = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        console.log(this.state.count);
        return (
            <div className="counterapp">
                <h1>Counter APP</h1>
                <h1>{this.state.count}</h1>
                <div className="buttons">
                    <button onClick={this.handleDecrement}>-</button>
                    <button onClick={this.handleReset}><RiResetRightLine /></button>
                    <button onClick={this.handleIncrement}>+</button>
                </div>
            </div>
        );
    }
}

export default Counterapp;