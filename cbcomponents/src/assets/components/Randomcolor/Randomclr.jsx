import React from "react";
import "./Randomclr.css";
class Randomclr extends React.Component {
    constructor(){
        super();
        this.state={
            bgcolor:"#00bcd4"
        }
    }
   
    handlerclrchange=()=>{
        let char="0123456789abcdef";
        let colorcode="#";
        for(let i=0;i<6;i++)
        {
            const indexNum=Math.floor(Math.random()*char.length);
            colorcode+=char[indexNum];

        }

        this.setState
        ({
            bgcolor:colorcode
        })

        }

        
    


    render() {
    return (
        <div
            className="randomclr"
            style={{ backgroundColor: this.state.bgcolor }}
        >
            <h1>Randomcolor</h1>
            <button onClick={this.handlerclrchange}>Random color change btn</button>
        </div>
    );
}
}
export default Randomclr;