import React from "react";
import './css/Login.css'

class DashboardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curtab: "" };
    }

    items = [
        { id: 1, name: 'Microsoft' },
        { id: 2, name: 'Google' },
        { id: 3, name: 'DELL' }
    ];

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {this.items.map((item) => 
                        
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                    
                    )}

                </table>
                <ul>

                </ul>
            </div>
        );
    }
}

export default DashboardList;