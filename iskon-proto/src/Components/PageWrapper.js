import React, { Component } from "react";
import "./PageWrapper.css";
import { Link } from "react-router-dom";

// class - className
// a - Link
// href - to

class PageWrapper extends Component {


  render() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
          <Link to="/" className="active">
           Together HEAL
          </Link>
          {/* In reverse order*/}
          <Link to="/JoinUs">Join Us!</Link>
          {/* Register / Join Us*/}

          <Link to="/contact">Contact</Link>

          <Link to="/about">About</Link>

        </div>

        <div style={{ paddingLeft: "16px" }}></div>

        {/* for children position*/}
        {this.props.children}

        <div className="footer">
          <Link to="#" className="fa fa-facebook"></Link>
        </div>
      </div>
    );
  }
}

export default PageWrapper;