import React from "react";
import './css/Login.css'

class ProjectCreateUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curpage: "about", login: false };
    }


    render() {
        return (
            <div className="form-container">
               <form className="form-box">
                <h2>Buy/Sell Project</h2>
                    <input className="text-box" type="text" placeholder="CurrentUser" disabled/><br/>
                    <label>Action</label>
                    <select className="text-box" placeholder="Action">
                        <option>Buy</option>
                        <option>Sell</option>
                    </select><br/>
                    <label>Project</label>
                    <select className="text-box" placeholder="Select Land">
                        <option>Project1</option>
                        <option>Project2</option>
                        <option>Project3</option>
                    </select><br/>
                    <label>User</label>
                    <select className="text-box" placeholder="Select User">
                        <option>User1</option>
                        <option>User2</option>
                        <option>User3</option>
                    </select><br/>
                    <input className="text-box" type="text" placeholder="Cost" /><br/>
                    <input className="text-box" type="date" placeholder="Date"/><br/>
                    <button className="login-button" onClick={this.props.forgotpass}>Submit</button>
               </form>
            </div>
        );
    }
}

export default ProjectCreateUpdate;