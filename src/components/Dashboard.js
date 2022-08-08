/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import Plot from "react-plotly.js";
import AddNew from "./AddNewPage";
import DashboardList from "./DashboardList";
import React from "react";
import axios from "axios";
const GroupedBarChart = (props) => {

  var plot1 = {
    x: ["Iraida", "Manuel", "Mario", "Melchor", "Iraima "],
    y: [4, 5, 6, 1, 4],
    name: "Land",
    type: "bar",
  };

  var plot2 = {
    x: ["Iraida", "Manuel", "Mario", "Melchor", "Iraima "],
    y: [12, 3, 5, 6, 2],
    name: "Project",
    type: "bar",
  };

  var data = [plot1, plot2];

  var piedata = [
    {
      values: [10000, 36000],
      labels: ["Land", "Project"],
      type: "pie",
    },
  ];

  var pielayout = {
    height: 500,
    width: 500,
    title: "Family wise land/project distribution",
  };

  return (
    <div>
      <Plot
        data={data}
        layout={{ width: 500, height: 500, title: "Land/Project holdings" }}
      />

      <Plot data={piedata} layout={pielayout}></Plot>
    </div>
  );
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", isAdmin:this.props.isAdmin };
  };

  componentDidMount() {
    let body = {
      "userID": window.sessionStorage.getItem("currUserID"),
    };
    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/userCharts.php';
    axios.post(url, body)
      .then(res => {
        this.setState({
          curUserName :window.sessionStorage.getItem("currUsername"),
          landData:res.data.LandChart,
          landTitle:res.data.LandChart.map(p => p.LandName),
          landPercent:res.data.LandChart.map(p => p.PercentOwned),
          landArea:res.data.LandChart.map(p => p.Area),
          projectData: res.data.ProjectChart,
          projectBarTitles: res.data.ProjectChart.map(p => p.ProjectName),
          projectBarData: res.data.ProjectChart.map(p => p.PercentOwned),
          projectPieData: res.data.ProjectChart.map(p => (p.PercentOwned * p.Valuation) / 100)
        })
      })
      .catch(err => console.log("Authentication failed"));
  }

  render() {
    return (
      <div>
       {this.state.isAdmin ?
      <h1>Admin Panel</h1>
      :
      <h1>Welcome {this.state.curUserName}</h1> 
      }
        
        {/* <GroupedBarChart></GroupedBarChart> */}
        <br />
{!this.state.isAdmin && <div>
 
  <Plot
          data={[{ x: this.state.projectBarTitles, y: this.state.projectBarData, type: "bar" }]}
          layout={{ width: 500, height: 500, title: "Project holdings" }}
        />

        <Plot
          data={[{ x: this.state.projectBarTitles, y: this.state.projectPieData, type: "bar" }]}
          layout={{ width: 500, height: 500, title: "Project Valuation" }}
        />

        <Plot
          data={[{ values: (this.state.landArea), labels: this.state.landTitle, type: "pie" }]}
          layout={{ width: 500, height: 500, title: "Land holdings" }}
        />
 
  </div>}
        
        <button class="normal-button" onClick={this.props.addnewfun}>
          Add new data
        </button>
        <DashboardList isAdmin={this.state.isAdmin}></DashboardList>
      </div>
    );
  }
}

export default Dashboard;
