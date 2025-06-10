import React from "react";
import "./Randomtheme.css";
class Randomtheme extends React.Component {
    constructor() {
        super();
        this.state = {
            istheme: false,
        };
    }

    handlerchangetheme = () => {
        this.setState({
            istheme: !this.state.istheme,
        });
    };

    render() {
        return (
            <div
                className="theme-container"
                style={{
                    background: this.state.istheme ? "#222" : "#fff",
                    color: this.state.istheme ? "#fff" : "#222",
                }}
            >
                <button className="theme-toggle-btn" onClick={this.handlerchangetheme}>
                   {this.state.istheme ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        );
    }
}

export default Randomtheme;