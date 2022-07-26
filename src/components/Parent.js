import React from "react";
import About from "./About";
import './css/Parent.css'
import Dashboard from "./Dashboard";
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curpage: "about",login:false };
    }

    changePage = (p) => {
        this.setState({
            curpage:p,
        })
    }

    changeLogin = (p) => {
        this.setState(prevState => ({
            login:!prevState.login
        }))
    }


    render() {
        return (
            <div>
                <ul>
                    <l1><button className="" onClick={() => this.changePage("about")}>About</button></l1>
                    <l1><button onClick={() => this.changePage("home")}>Home</button></l1>
                    <l1><button onClick={() => this.changePage("contact")}>Contact</button></l1>
                    <l1><button onClick={() => this.changeLogin("login")}>Login</button></l1>
                </ul>

                {this.state.curpage == "about" && <About/>}
                {}
                <h1>{ this.state.curpage }</h1>
                <h1>{this.state.login ? "Login":"Logout"}</h1>

                <Dashboard username={this.state.curpage}></Dashboard>

            </div>
        );
    }
}

export default Parent;