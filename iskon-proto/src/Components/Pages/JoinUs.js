import React, { Component } from "react";
import "./JoinUs.css";

class JoinUs extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Let's Fight Depression Together</h1>
        <div className="container">
          <form>
            {/* FIRST NAME FIELD */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                />
                <small class="form-text text-muted">
                  Please Enter your First Name
                </small>
              </div>

              {/* LAST NAME FIELD */}

              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" placeholder="Doe" />
                <small class="form-text text-muted">
                  Please Enter your Last Name
                </small>
              </div>
            </div>

            {/* DATE OF BIRTH FIELD*/}

            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" className="form-control" />
                <small class="form-text text-muted">
                  Please enter your date of birth
                </small>
              </div>
            </div>

            {/* ADDRESS FIELD */}

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="25th North Caroline Street,..."
              />
              <small class="form-text text-muted">
                Please Enter your Last Name
              </small>
            </div>

            {/* DISCRIPTION FIELD */}

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                cols="20"
                rows="05"
                className="form-control"
              ></textarea>
              <small class="form-text text-muted">
                Please enter a brief description of your problem
              </small>
            </div>

            <hr />
            <div className="container">
              <h1> Answer few of our questions before moving On!!</h1>

              <h2> Do you think you are trying to overcome it?</h2>

              <div className="form-row">
                <div className="form-check col-md-6 align-content-center">
                  <input type="radio" name="yes" className="form-check-input" />
                  <label htmlFor="yes" className="form-check-label mx-auto">
                    Yes, I'm in
                  </label>
                </div>

                <div className="form-check col-md-6">
                  <input type="radio" name="yes" className="form-check-input" />
                  <label htmlFor="yes" className="form-check-label">
                    No, I can't
                  </label>
                </div>
              </div>

              <div className="form-group row">
                <label for="reason" className="col-sm-4 col-form-label">
                  What do you consider a reason for it?
                </label>
                <div className="col-sm-8">
                  <input type="email" className="form-control" />
                </div>
              </div>

              {/* SUBMIT BUTTON */}

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default JoinUs;