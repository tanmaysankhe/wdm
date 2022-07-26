import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
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

    changeLogin = () => {
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
                    {!this.state.login && <l1><button onClick={() => this.changePage("dash")}>Dash</button></l1>}
                    {this.state.login ? <l1><button onClick={() => this.changeLogin()}>Login</button></l1>
                    : <l1><button onClick={() => this.changeLogin()}>Logout</button></l1>}
                </ul>

                {this.state.curpage == "about" && <About/>}
                {this.state.curpage == "dash" && <Dashboard username="dummy"/> }
                {this.state.curpage == "contact" && <ContactUs/>}
            </div>
        );
    }
}

export default Parent;