/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import "./css/Login.css";
import "./css/DashboardList.css";
import axios from "axios";

class DashboardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", isAdmin: this.props.isAdmin, 
    curuserid: parseInt(window.sessionStorage.getItem("currUserID")) };
  }

  componentDidMount() {
    const userid = this.state.curuserid;
    axios
      .get(
        "https://txs8004.uta.cloud/backend/getAllAssets.php"
      )
      .then(res => {
        if (this.state.isAdmin) {
          this.setState({
            data: res.data,
            ProjectOwnership: res.data.ProjectOwnership,
            LandOwnership: res.data.LandOwnership,
            Trial: res.data.Trial
          })
        }
        else {
          this.setState({
            data: res.data,
            ProjectOwnership: res.data.ProjectOwnership.filter(p => parseInt(p.UserID) === userid),
            LandOwnership: res.data.LandOwnership.filter(p => parseInt(p.UserID) === userid),
            Trial: res.data.Trial.filter(p => parseInt(p.UserID) === userid)
          })
        }

        window.sessionStorage.setItem("projects", JSON.stringify(res.data.Projects));
        window.sessionStorage.setItem("family", JSON.stringify(res.data.Family));
        window.sessionStorage.setItem("users", JSON.stringify(res.data.Users));
        window.sessionStorage.setItem("projectownership", JSON.stringify(res.data.ProjectOwnership));
        window.sessionStorage.setItem("land", JSON.stringify(res.data.Land));
        window.sessionStorage.setItem("landownership", JSON.stringify(res.data.LandOwnership));
        window.sessionStorage.setItem("trial", JSON.stringify(res.data.Trial));
      })
      .catch(error => console.log(error));
  }


  projectFieldNames = ["Project ID", "ProjectName", "User ID", "Valuation", "Percent Owned"];
  landFieldNames = ["Land ID", "User ID", "Land Name", "Percent Owned", "Area"];
  trialFieldNames = ["Trial ID", "User ID", "Asset Type", "Asset ID", "Outcome", "Fees"];
  userFieldNames = ["User ID", "FullName", "UserEmail"];

  render() {
    return (
      <div>
        <Dashtable tableType={"Projects"} fieldnames={this.projectFieldNames} data={this.state.ProjectOwnership}></Dashtable>
        <DashtableLand tableType={"Land"} fieldnames={this.landFieldNames} data={this.state.LandOwnership}></DashtableLand>
        <DashtableTrial tableType={"Trials"} fieldnames={this.trialFieldNames} data={this.state.Trial}></DashtableTrial>
        <DashtableUsers tableType={"User"} fieldnames={this.userFieldNames} data={this.state.data.Users}></DashtableUsers>
      </div>
    );
  }
}
function DashtableUsers(props) {
  return (<div>
    <br />
    <h2>{props.tableType}</h2>
    <table className="dashboardtable">
      <tr>
        {props.fieldnames.map(x => <th>{x}</th>)}
      </tr>

      {props.data?.map(row => (
        <tr>
          <td>{row.UserID}</td>
          <td>{row.FullName}</td>
          <td>{row.UserEmail}</td>

        </tr>
      ))}
    </table>
    <br />
  </div>)
}

function DashtableTrial(props) {
  return (<div>
    <br />
    <h2>{props.tableType}</h2>
    <table className="dashboardtable">
      <tr>
        {props.fieldnames.map(x => <th>{x}</th>)}
        <th>Edit/Delete</th>
      </tr>

      {props.data?.map(row => (
        <tr>
          <td>{row.TrailID}</td>
          <td>{row.UserID}</td>
          <td>{row.AssetType}</td>
          <td>{row.AssetID}</td>
          <td>{row.Outcome}</td>
          <td>{row.Fees}</td>
          <td>
            <button className="normal-button">Edit</button>{" "}
            <button className="normal-button">Delete</button>
          </td>
        </tr>
      ))}
    </table>
    <br />
  </div>)
}

function DashtableLand(props) {
  return (<div>
    <br />
    <h2>{props.tableType}</h2>
    <table className="dashboardtable">
      <tr>
        {props.fieldnames.map(x => <th>{x}</th>)}
        <th>Edit/Delete</th>
      </tr>

      {props.data?.map(row => (
        <tr>
          <td>{row.LandID}</td>
          <td>{row.UserID}</td>
          <td>{row.LandName}</td>
          <td>{row.PercentOwned}</td>
          <td>{row.Area}</td>
          <td>
            <button className="normal-button">Edit</button>{" "}
            <button className="normal-button">Delete</button>
          </td>
        </tr>
      ))}
    </table>
    <br />
  </div>)
}

function Dashtable(props) {
  return (<div>
    <br />
    <h2>{props.tableType}</h2>
    <table className="dashboardtable">
      <tr>
        {props.fieldnames.map(x => <th>{x}</th>)}
        <th>Edit/Delete</th>
      </tr>

      {props.data?.map(row => (
        <tr>
          <td>{row.ProjectID}</td>
          <td>{row.UserID}</td>
          <td>{row.ProjectName}</td>
          <td>{row.Valuation}</td>
          <td>{row.PercentOwned}</td>
          <td>
            <button className="normal-button">Edit</button>{" "}
            <button className="normal-button">Delete</button>
          </td>
        </tr>
      ))}
    </table>
    <br />
  </div>)
}

export default DashboardList;
