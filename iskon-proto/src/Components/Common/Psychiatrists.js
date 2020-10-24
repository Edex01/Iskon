import React, { Component } from "react";
import "./Psychiatrist.css";

import abc from "../Images/abc.jpeg";
import def from "../Images/def.jpeg";
import mnp from "../Images/mnp.jpeg";
import xyz from "../Images/xyz.jpeg";

class Contacts extends Component {

    render() {

        return (
            <div>
                <div id ="Psychiatrists">

                    <h1>Psychiatrists Near You</h1>
                    
                    <div id ="contact">
                        <img src={abc} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Hitesh Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>

                    <div id ="contact">
                        <img src={def} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Ritesh Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>

                    <div id ="contact">
                        <img src={mnp} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Fitest Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>

                    <div id ="contact">
                        <img src={xyz} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Shitest Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>
                    
                </div>
            </div>
           
        )

    }

}

export default Contacts;