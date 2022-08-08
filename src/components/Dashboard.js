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
      values: [64, 36],
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
    this.state = { data: "" };
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
        <h1>User Dashboard</h1>
        {/* <GroupedBarChart></GroupedBarChart> */}
        <br />

        <Plot
          data={[{ x: this.state.projectBarTitles, y: this.state.projectBarData, type: "bar" }]}
          layout={{ width: 500, height: 500, title: "Land/Project holdings" }}
        />

        <Plot
          data={[{ x: this.state.projectBarTitles, y: this.state.projectPieData, type: "bar" }]}
          layout={{ width: 500, height: 500, title: "Land/Project holdings" }}
        />

        <button class="normal-button" onClick={this.props.addnewfun}>
          Add new data
        </button>
        <DashboardList></DashboardList>
      </div>
    );
  }
}

export default Dashboard;
