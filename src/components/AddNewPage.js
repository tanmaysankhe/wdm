import React from "react";
import './css/Login.css'
import LandCreateUpdate from "./LandCreateUpdate";
import ProjectCreateUpdate from "./ProjectCreateUpdate";
import TrialCreateUpdate from "./TrialCreateUpdate";

class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curtab: "project"};
    }

    changeTab =(p) =>{
        this.setState({
            curtab:p
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeTab("project")}>Project</button>
                <button onClick={() => this.changeTab("land")}>Land</button>
                <button onClick={() => this.changeTab("trial")}>Trial</button>

                {this.state.curtab === "project" && <ProjectCreateUpdate></ProjectCreateUpdate>}
                {this.state.curtab === "land" && <LandCreateUpdate></LandCreateUpdate>}
                {this.state.curtab === "trial" && <TrialCreateUpdate></TrialCreateUpdate>}

            </div>
        );
    }
}

export default AddNew;