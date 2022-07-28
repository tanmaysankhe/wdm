import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import './css/Parent.css'
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import ForgotPassword from "./ForgotPassword";
import Homepage from "./Homepage";
import Login from "./LoginPage";
import Register from "./RegisterPage";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curpage: "about", login: false };
    }

    changePage = (p) => {
        console.log(p);
        this.setState({
            curpage: p,
        })
    }

    changeToLogin = () => {
        console.log("in");
        this.setState({
            login:true,
            curpage:"login"
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
                        {!this.state.login ? <span><button className="nav-button" onClick={() => this.changeToLogin()}>Login</button><span><button className="nav-button" onClick={() => this.changePage("register")}>Register</button></span></span>
                            : <span><button className="nav-button" onClick={() => this.changeToLogout()}>Logout</button></span>}

                    {/* </ul> */}
                </div>
                {this.state.curpage === "home" && <Homepage></Homepage>}
                {this.state.curpage === "about" && <About></About>}
                {this.state.curpage === "dash" && <Dashboard username="dummy" />}
                {this.state.curpage === "contact" && <ContactUs />}
                {this.state.curpage === "login" && <Login forgotpass={() => this.changePage("forgotpass")}></Login>}
                {this.state.curpage === "register" && <Register></Register>}
                {this.state.curpage === "forgotpass" && <ForgotPassword></ForgotPassword>}
            <Footer></Footer>
            </div>

        );
    }
}

export default Parent;