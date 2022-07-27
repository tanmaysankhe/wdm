import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import './css/Parent.css'
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Homepage from "./Homepage";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curpage: "about", login: false };
    }

    changePage = (p) => {
        this.setState({
            curpage: p,
        })
    }

    changeToLogin = () => {
        console.log("in");
        this.setState({
            login:true,
            curpage:"dash"
        })
    }

    changeToLogout = () => {
        console.log("out");
        this.setState({
            login:false,
            curpage:"home"
        })
    }


    render() {
        return (
            <div>
                <div className="nav-wrapper">
                    {/* <ul> */}
                        <span><button className="nav-button" onClick={() => this.changePage("home")}>Home</button></span>
                        <span><button className="nav-button" onClick={() => this.changePage("about")}>About</button></span>
                        <span><button className="nav-button" onClick={() => this.changePage("contact")}>Contact</button></span>
                        {!this.state.login && <span><button className="nav-button" onClick={() => this.changePage("dash")}>Dash</button></span>}
                        {!this.state.login ? <span><button className="nav-button" onClick={() => this.changeToLogin()}>Login</button></span>
                            : <span><button className="nav-button" onClick={() => this.changeToLogout()}>Logout</button></span>}
                    {/* </ul> */}
                </div>
                {this.state.curpage == "home" && <Homepage></Homepage>}
                {this.state.curpage == "about" && <Homepage></Homepage>}
                {this.state.curpage == "dash" && <Dashboard username="dummy" />}
                {this.state.curpage == "contact" && <ContactUs />}
            <Footer></Footer>
            </div>

        );
    }
}

export default Parent;