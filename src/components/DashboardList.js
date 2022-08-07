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
    this.state = { data: "" };
  }

  componentDidMount() {
    axios
        .get(
            "https://txs8004.uta.cloud/backend/getAllAssets.php"
        )
        .then(res => {
            this.setState({ data: res.data});
            window.sessionStorage.setItem("projects", JSON.stringify(res.data.Projects));
            window.sessionStorage.setItem("family", JSON.stringify(res.data.Family));
            window.sessionStorage.setItem("users", JSON.stringify(res.data.Users));   
            window.sessionStorage.setItem("projectownership", JSON.stringify(res.data.ProjectOwnership));                     
        })
        .catch(error => console.log(error));
  }
  

  data = {
    "project": [{
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    }],
    "land": [{
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    }],
    "user": [{
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    }],
    "trial": [{
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    },
    {
      "projectID": 1,
      "userID": 123,
      "valuation": 10000,
    }]

  };

  projectFieldNames = ["Project ID", "User ID", "Valuation"];
  landFieldNames = ["Land ID", "User ID", "Valuation"];
  trialFieldNames = ["Trial ID", "User ID", "Valuation"];
  userFieldNames = ["User ID", "DOB", "Valuation"];

  render() {
    return (
      <div>
        <Dashtable tableType={"Projects"} fieldnames={this.projectFieldNames} data={this.data.project}></Dashtable>
        <Dashtable tableType={"Land"} fieldnames={this.landFieldNames} data={this.data.land}></Dashtable>
        <Dashtable tableType={"Trials"} fieldnames={this.trialFieldNames} data={this.data.trial}></Dashtable>
        <Dashtable tableType={"User"} fieldnames={this.userFieldNames} data={this.data.user}></Dashtable>
      </div>
    );
  }
}

function Dashtable(props) {
  return (<div>
    <br/>
    <h2>{props.tableType}</h2>
    <table className="dashboardtable">
      <tr>
        {props.fieldnames.map(x => <th>{x}</th>)}
        <th>Edit/Delete</th>
      </tr>

      {props.data.map(row => (
        <tr>
          <td>{row.projectID}</td>
          <td>{row.userID}</td>
          <td>{row.valuation}</td>
          <td>
            <button className="normal-button">Edit</button>{" "}
            <button className="normal-button">Delete</button>
          </td>
        </tr>
      ))}
    </table>
    <br/>
  </div>)
}

export default DashboardList;
