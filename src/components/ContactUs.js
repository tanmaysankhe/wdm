/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import "./css/Login.css";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "about", login: false };
  }

  changePage = (p) => {
    this.setState({
      curpage: p,
    });
  };

  changeToLogin = () => {
    console.log("in");
    this.setState({
      login: true,
      curpage: "dash",
    });
  };

  changeToLogout = () => {
    console.log("out");
    this.setState({
      login: false,
      curpage: "home",
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1 className="heading">Contact Us</h1>
          <input className="text-box" type="text" placeholder="First Name" />
          <br />
          <input className="text-box" type="text" placeholder="Last Name" />
          <br />
          <input className="text-box" type="text" placeholder="Email" />
          <br />
          <textarea
            className="text-box"
            placeholder="Type your message"
          ></textarea>
          <br />
          <button className="normal-button">Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactUs;
