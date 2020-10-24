

import React, { Component } from "react";
import "./Product.css";
import Book from "../Images/Book.jpeg";
import tkg from "../Images/tkg.png";


class Product extends Component {

    render() {

        return (
            <div id ="Rec">
                
                <div id ="Book">
                        <img src={Book} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Ritesh Gupta</h4>
                        <h6>Contact Number: 8932389823</h6>
                    </div>


                    <div id ="Book">
                        <img src={tkg} alt="Avatar" width="150" height="150"/>
                        <h4>Dr. Ritesh Gupta</h4>
                        <p>Think And Grow Rich has earned itself the reputation of being considered a textbook for actionable techniques that can help one get better 
                            at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields.</p>
                        <h6>Contact Number: 8932389823</h6>
                 </div>

            </div>
           
        )

    }

}

export default Product;