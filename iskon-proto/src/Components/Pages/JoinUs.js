
import React, { Component } from "react";
import "./JoinUs.css";

class JoinUs extends Component {
  render() {


    return (
      <div>
        <h1>Let's Fight Depression Together</h1>
        
        <form action="">
          {/* FIRST NAME FIELD */}

          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>

          {/* LAST NAME FIELD */}

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>

          {/* ADDRESS FIELD */}

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-75">

            <label htmlFor="country" id = "location"></label>
            </div>
          </div>

          {/* DISCRIPTION FIELD */}

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Discription</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>

          {/* DATE OF BIRTH FIELD*/}

          <div className="row">
            <div className="col-25">
              <label htmlFor="DOB">Date Of Birth</label>
            </div>
            <div className="col-75">
              <input type="date" value="2017-06-01" />
            </div>
          </div>


          <h1> Answer few of our questions before moving On!!</h1>

          <hr/>

    <h2> Do you think you are trying to overcome it?</h2>


    <div className="col-25">
        <input type="radio" id="yes" name="yes" value="yes"/>
        <label for="vehicle1"> YES, I'm!</label><br/>
        <input type="radio" id="no" name="no" value="no"/>
        <label for="No">No, I can't</label><br/>
  
    </div>

    <div className="row">
            <div className="col-25">
              <label htmlFor="lname"> What you consider as reason for your stage?</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Cause is.."
              />
            </div>
          </div>
       
          {/* SUBMIT BUTTON */}

          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default JoinUs;