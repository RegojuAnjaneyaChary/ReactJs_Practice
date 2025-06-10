import React from "react";
import "./Signup.css";
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            toshow: false
        }
    }

handlersignup = () => {
    this.setState({
        toshow: !this.state.toshow
    })
}
    render() {
        return (
            <div className="signup-container">
                
                <button className="signup-btn" onClick={this.handlersignup}>Signup</button>
              {
                this.state.toshow && <div className="form">
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button className="signup-btn">Signup</button>
                </div>
              }

            </div>
        );
    }
}
export default Signup;