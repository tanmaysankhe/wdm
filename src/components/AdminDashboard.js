/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import "./css/Login.css";

import "./css/Admindashboard.css";

class AdminDashboard extends React.Component {
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
        <h1>Admin Dashboard</h1>
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
            <td>127367091</td>
            <td>221031476</td>
            <td>Iraida Diaz Alfonzo</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367068</td>
            <td>221031678</td>
            <td>Mario Diaz Alfonzo</td>
            <td>Buy</td>
            <td>12900$</td>
            <td>06-23-2012</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367351</td>
            <td>127367487</td>
            <td>Melchor</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>04-20-2019</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
        <br></br>
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
            <td>127367361</td>
            <td>221031893</td>
            <td>Iraima Diaz de Castillo</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>12-14-2018</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>221031476</td>
            <td>Iraida Diaz Alfonzo</td>
            <td>Buy</td>
            <td>12900$</td>
            <td>07-30-2020</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>12736708</td>
            <td>221031893</td>
            <td>Manuel Diaz Alfonzo</td>
            <td>Sell</td>
            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
        <br></br>
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
            <td>127367487</td>
            <td>Melchor</td>
            <td>Favour</td>
            <td>Land</td>
            <td>127367827</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367235</td>
            <td>Iraima Diaz de Castillo</td>
            <td>Opposite</td>
            <td>Project</td>
            <td>127367254</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367827</td>
            <td>Mario Diaz</td>
            <td>Favour</td>
            <td>Land</td>
            <td>127367897</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
        </table>
        <br></br>
        <h2>User Details Table</h2>
        <table className="dashboardtable">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Email</th>

            <th>Networth</th>
            <th>DOB</th>
            <th>Edit/Declare Demise</th>
          </tr>
          <tr>
            <td>127367091</td>
            <td>221031476</td>
            <td>Iraida Diaz Alfonzo</td>

            <td>12900$</td>
            <td>07-30-2008</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Demise</button>
            </td>
          </tr>
          <tr>
            <td>127367068</td>
            <td>221031678</td>
            <td>Mario Diaz Alfonzo</td>

            <td>12900$</td>
            <td>06-23-2012</td>
            <td>
              <button className="normal-button">Edit</button>{" "}
              <button className="normal-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>127367351</td>
            <td>127367487</td>
            <td>Melchor</td>

            <td>12900$</td>
            <td>04-20-2019</td>
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

export default AdminDashboard;
