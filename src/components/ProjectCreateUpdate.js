/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */
import axios from "axios";
import React from "react";
import "./css/Login.css";

class ProjectCreateUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curusername: window.sessionStorage.getItem("currUsername"),
      curuserid: window.sessionStorage.getItem("currUserID"),
      assetType: "",
      action: "buy",
      allUsers: JSON.parse(window.sessionStorage.getItem("users")),
      projects: JSON.parse(window.sessionStorage.getItem("projects")),
      userProjects: JSON.parse(window.sessionStorage.getItem("projectownership")),
      outcome: "",
      currAsset: "",
      opposition: "",
      trialdate: "",
      selectedproject:"",
      selectedclient:""
    };
  }

componentDidMount= () => {
  const userid = this.state.curuserid;
  this.setState(prevState => ({
    userProjects: prevState.userProjects.filter(p => parseInt(p.UserID) === parseInt(userid))
  }));
}


  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if (name === "assetType" && value === "project") {
      console.log("project");
      let asset = this.state.allAssets.Projects;
      this.setState({
        currAsset: asset
      })
    }
    else if (name === "assetType" && value === "land") {
      console.log("land");
      this.setState({
        currAsset: this.state.allAssets.Family
      })
    }
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSellInFamily = () =>{

  }
  handleBuyInFamily = () => {

  }
  handleSellExternal = (e) =>{
    e.preventDefault();
    let body = {
      "projectID":this.state.selectedproject,
      "userID":parseInt(this.state.curuserid),
      "ownedPercent": parseInt(this.state.curuserid)
    };


    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/projectExternalSell.php';
    axios.post(url, body)
      .then(res => this.handleSucess(res))
      .catch(err => alert("Authentication failed"));
  }
  handleBuyExternal = (e) =>{
    e.preventDefault();
    let body = {
      "projectName":this.state.selectedproject,
      "projectValue":parseInt(this.state.valuation),
      "userID": parseInt(this.state.curuserid)
    };


    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/projectExternalBuy.php';
    axios.post(url, body)
      .then(res => this.handleSucess(res))
      .catch(err => alert("Authentication failed"));
  }

  handleSucess = (res) =>{
    console.log(res);
    alert("Success!");
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h2>Project</h2>
          <input
            className="text-box"
            type="text"
            placeholder={this.state.curusername}
            disabled
          />
          <br />
          <label>Action</label>
          <select className="text-box" placeholder="Action" name="action" onChange={this.handleChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <br />

        {this.state.action === "buy" ? 
        <div> 
          {/* BUY */}
          <h1>Buy</h1>
          <div>
            <label>Client Type</label>
            <select className="text-box" placeholder="Client Type" name="clientType" onChange={this.handleChange}>
              <option value="family">Family</option>
              <option value="external">External</option>
            </select>
          </div>
          {this.state.clientType === "external" ?
            <div>
              {/* EXTERNAL */}
              <input
                className="text-box"
                type="text"
                placeholder="Project Name"
                name="selectedproject"
                value={this.state.selectedproject}
                onChange={this.handleChange}
              />
              <input
                className="text-box"
                type="text"
                placeholder="Valuation"
                name="valuation"
                value={this.state.valuation}
                onChange={this.handleChange}
              />
              <br></br>
              <button className="normal-button" onClick={this.handleBuyExternal}>
                Register New Project EXX
              </button>

            </div>
            : // External Swicth
            <div>
              {/* INTERNAL */}
              <label>Project</label>
              <select className="text-box" placeholder="Project" name="selectedproject" value={this.state.selectedproject} onChange={this.handleChange}>
                {this.state.projects.map(project => (
                  <option value={project.ProjectID}>{project.ProjectID + " - " + project.ProjectName}</option>
                ))}
              </select>
              <br />
              <select className="text-box" placeholder="Opposistion" name="selectedclient" value={this.state.selectedclient} onChange={this.handleChange}>
                {this.state.allUsers.map(user => (
                  <option value={user.UserID}>{user.FullName}</option>
                ))}
              </select>
              <br></br>
              <button className="normal-button" onClick={this.props.forgotpass}>
                Submit
              </button>
            </div>
          }
        </div>
        ://BUY DIVISION
      <div>
        {/* SELL */}
        <h1>Sell</h1>
        <div>
            <label>Client Type</label>
            <select className="text-box" placeholder="Client Type" name="clientType" onChange={this.handleChange}>
              <option value="family">Family</option>
              <option value="external">External</option>
            </select>
          </div>
          {this.state.clientType === "external" ?
            <div>
              <select className="text-box" placeholder="Project" name="selectedproject" value={this.state.selectedproject} onChange={this.handleChange}>
                {this.state.userProjects.map(project => (
                  <option value={project.ProjectID}>{project.ProjectID + " - " + project.ProjectName}</option>
                ))}
              </select>
              <input
                 type="text"
                placeholder="Valuation"
                name="valuation"
                value={this.state.valuation}
                onChange={this.handleChange}
              />
              <br></br>
              <button className="normal-button" onClick={this.handleSellExternal}>
                Sell project
              </button>

            </div>
            :
            <div>
              <label>Project</label>
              <select className="text-box" placeholder="Project" name="selectedproject" value={this.state.selectedproject} onChange={this.handleChange}>
                {this.state.projects.map(project => (
                  <option value={project.ProjectID}>{project.ProjectID + " - " + project.ProjectName}</option>
                ))}
              </select>
              <br />
              <select className="text-box" placeholder="Client" name="selectedclient" value={this.state.selectedclient} onChange={this.handleChange}>
                {this.state.allUsers.map(user => (
                  <option value={user.UserID}>{user.FullName}</option>
                ))}
              </select>
              <br></br>
              <button className="normal-button" onClick={this.props.forgotpass}>
                Submit
              </button>
            </div>
          }

      </div>
      }

          



          {/* <input className="text-box" type="date" placeholder="Date" name="trialdate" onChange={this.handleChange} value={this.state.trialdate} />
          <br /> */}

        </form>
      </div>
    );
  }
}

export default ProjectCreateUpdate;
