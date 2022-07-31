/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import "./css/Login.css";

class TrialCreateUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "about", login: false };
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h2>Trial</h2>
          <input
            className="text-box"
            type="text"
            placeholder="CurrentUser"
            disabled
          />
          <br />
          <label>Outcome</label>
          <select className="text-box" placeholder="Action">
            <option>In favour</option>
            <option>In opposition</option>
          </select>
          <br />
          <label>Trial on </label>
          <select className="text-box" placeholder="Action">
            <option>Land</option>
            <option>Project</option>
          </select>
          <input
            className="text-box"
            type="text"
            placeholder="Land/Project ID"
          />
          <br />
          <input className="text-box" type="date" placeholder="Date" />
          <br />
          <button className="normal-button" onClick={this.props.forgotpass}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TrialCreateUpdate;
