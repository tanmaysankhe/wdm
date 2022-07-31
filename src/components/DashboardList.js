import React from "react";
import "./css/Login.css";
import "./css/DashboardList.css";

class DashboardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curtab: "" };
  }

  items = [
    { id: 1, name: "Microsoft" },
    { id: 2, name: "Google" },
    { id: 3, name: "DELL" },
  ];

  render() {
    return (
      <div>
        <br></br>
        <h2>Project Table</h2>
        <table className="dashboardtable">
          <tr>
            <th>Project ID</th>
            <th>User ID</th>
            <th>Owner Name</th>
            <th>Action</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Edit/Delete</th>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031476</td>
            <td>Tanmay</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031678</td>
            <td>Zulfiya</td>
            <td>Buy</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031893</td>
            <td>Waseem</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
        <h2>Land Table</h2>
        <table className="dashboardtable">
          <tr>
            <th>Project ID</th>
            <th>User ID</th>
            <th>Owner Name</th>
            <th>Action</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Edit/Delete</th>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031893</td>
            <td>Waseem</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031893</td>
            <td>Waseem</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031893</td>
            <td>Waseem</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
        <h2>Trails</h2>
        <table className="dashboardtable">
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Outcome</th>
            <th>Trail Type</th>
            <th>Project/Land ID</th>
            <th>Date</th>
            <th>Edit/Delete</th>
          </tr>
          <tr>
            <td>127367827</td>
            <td>Waseem</td>
            <td>Opposite</td>
            <td>Land</td>
            <td>127367827</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>Waseem</td>
            <td>Opposite</td>
            <td>Land</td>
            <td>127367827</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>Waseem</td>
            <td>Opposite</td>
            <td>Land</td>
            <td>127367827</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DashboardList;
