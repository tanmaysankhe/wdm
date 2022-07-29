import React from "react";
import './css/Login.css'

class DashboardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curtab:"" };
    }

    items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'}
      ];

    render() {
        return (
            <div>
                <ul>
                    {this.items.map((item) => <div><li id={item.id}>{item.name}</li><button>Edit</button><button>Delete</button></div>)}
                </ul>
            </div>
        );
    }
}

export default DashboardList;