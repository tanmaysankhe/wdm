import Plot from 'react-plotly.js';
import DashboardList from './DashboardList';

const GroupedBarChart = (props) =>{
  var plot1 = {
  x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
  y: [4, 5, 6, 1, 4],
  name: "2016",
  type: "bar",
};

var plot2 = {
  x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
  y: [12, 3, 5, 6, 2],
  name: "2017",
  type: "bar",
};

var data = [plot1, plot2];
    return(
      <Plot
      data={data}
      layout={ {width: 500, height: 500, title: 'Electronics Prices 2016/2017'} } />
    )
}



function Dashboard(props) {
    return (
      <div>
        <GroupedBarChart></GroupedBarChart>
        <DashboardList></DashboardList>
      </div>
    );
  }
  
  export default Dashboard;
  