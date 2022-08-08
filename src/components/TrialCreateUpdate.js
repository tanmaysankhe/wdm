/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */
import axios from "axios";
import React from "react";
import "./css/Login.css";

class TrialCreateUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curusername: window.sessionStorage.getItem("currUsername"),
      curuserid: window.sessionStorage.getItem("currUserID"),
      allUsers: JSON.parse(window.sessionStorage.getItem("users")),
      projects: JSON.parse(window.sessionStorage.getItem("projects")),
      projectOwnership: JSON.parse(window.sessionStorage.getItem("projectownership")),
      outcome: "Win",
      assetType:"Land",
      currAsset: "",
      opposition: "",

    };
  }


  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleAddTrial = (e) => {
    e.preventDefault();
    let body = {
      "assetType": this.state.assetType,
      "assetID": this.state.assetID,
      "userID":this.state.curuserid,
      "trialOutcome":this.state.outcome,
      "opID":this.state.oposition,
      "fees":this.state.fees
    };

    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/updateTrial.php';
    axios.post(url, body)
      .then(res => this.handleSucess(res))
      .catch(err => alert("Operation failed"));
  }

  handleSucess = (res) => {
    console.log(res);
    alert("Success!");
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1>Trial</h1>
          <input
            className="text-box"
            type="text"
            placeholder={this.state.curusername}
            disabled
          />
          <br />
          <label>Outcome</label><br />
          <select className="text-box" placeholder="Action" name="outcome" onChange={this.handleChange}>
            <option value="win">Win</option>
            <option value="lose">Lose</option>
          </select>
          <br />

          <div>
            <div>
              <label>Asset Type</label><br></br>
              <select className="text-box" placeholder="Client Type" name="assetType" onChange={this.handleChange}>
                <option value="land">Land</option>
                <option value="project">Project</option>
              </select>
            </div>
            <div>
              <input
                className="text-box"
                type="text"
                placeholder="Asset ID"
                name="assetID"
                value={this.state.assetID}
                onChange={this.handleChange}
              />
              <input
                className="text-box"
                type="text"
                placeholder="oposition"
                name="oposition"
                value={this.state.oposition}
                onChange={this.handleChange}
              />

              <input
                className="text-box"
                type="text"
                placeholder="Fees"
                name="fees"
                value={this.state.fees}
                onChange={this.handleChange}
              />
              <br></br>
              <button className="normal-button" onClick={this.handleAddTrial}>
                Add Trial
              </button>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TrialCreateUpdate;
