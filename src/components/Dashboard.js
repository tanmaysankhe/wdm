import Plot from "react-plotly.js";
import AddNew from "./AddNewPage";
import DashboardList from "./DashboardList";

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

function Dashboard(props) {
  return (
    <div>
      <h1>User Dashboard</h1>
      <GroupedBarChart></GroupedBarChart>
      <br />

      <button class="normal-button" onClick={props.addnewfun}>
        Add new data
      </button>
      <DashboardList></DashboardList>
    </div>
  );
}

export default Dashboard;
