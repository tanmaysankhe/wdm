/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import "./css/Login.css";

class TrialCreateUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curusername: window.sessionStorage.getItem("currUsername"),
      curuserid: window.sessionStorage.getItem("currUserID"),
      assetType: "",
      allUsers:JSON.parse(window.sessionStorage.getItem("users")),
      projects: JSON.parse(window.sessionStorage.getItem("projects")),
      outcome: "",
      currAsset: "",
      opposition: "",
      trialdate:""
    };
  }

  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if(name === "assetType" && value==="project"){
      console.log("project");
      let asset = this.state.allAssets.Projects;
      this.setState({
        currAsset:asset
      })
    }
    else if(name === "assetType" && value === "land"){
      console.log("land");
      this.setState({
        currAsset:this.state.allAssets.Family
      })
    }
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h2>Trial</h2>
          <input
            className="text-box"
            type="text"
            placeholder={this.state.curusername}
            disabled
          />
          <br />
          <label>Outcome</label>
          <select className="text-box" placeholder="Outcome" name="outcome" onChange={this.handleChange}>
            <option value="favour">In favour</option>
            <option value="opposite">In opposition</option>
          </select>
          <br />
          <label>Trial on </label>
          <select className="text-box" placeholder="Asset Type" name="assetType" onChange={this.handleChange}>
            <option value="land">Land</option>
            <option value="project">Project</option>
          </select>
{this.state.assetType === "project" ? 
<div>
<label>Project</label>
          <select className="text-box" placeholder="Asset Type" name="assetType" onChange={this.handleChange}>
            <option value="land">Land</option>
            <option value="project">Project</option>
          </select>
</div>
:
<div>
<label>Land</label>
        
</div>
}
          <label></label>
          <select className="text-box" placeholder="Asset Type" name="assetType" onChange={this.handleChange}>
            <option value="land">Land</option>
            <option value="project">Project</option>
          </select>

          <input
            className="text-box"
            type="text"
            placeholder="Land/Project ID"
          />
          <br />
          <select className="text-box" placeholder="Opposistion" name="opposition" onChange={this.handleChange}>
            {this.state.allUsers.map(user => (
              <option value={user.UserID}>{user.FullName}</option>
            ))}
            
            <option value="land">Land</option>
            <option value="project">Project</option>
          </select>

          <input className="text-box" type="date" placeholder="Date" name="trialdate" onChange={this.handleChange} value={this.state.trialdate} />
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
