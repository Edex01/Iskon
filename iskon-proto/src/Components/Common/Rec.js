import React, { Component } from "react";
import "./Rec.css";
import tkg from "../Images/tkg.png";
import Book from "../Images/Book.jpeg";

import Product from "./product.js";

class Contacts extends Component {

    render() {

        return (
            <div>
                <div id ="Rec">

                    <h1>Hey! I'm ML, I reccomend you...</h1>
                    
                   

                   <div id ="Book">
                        <img src={Book} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Ritesh Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>

                    <div id ="Book">
                        <img src={tkg} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Ritesh Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>

                    
                    
                </div>
            </div>
           
        )

    }

}

export default Contacts;