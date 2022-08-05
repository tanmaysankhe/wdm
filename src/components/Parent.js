/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import "./css/Parent.css";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import ForgotPassword from "./ForgotPassword";
import Homepage from "./Homepage";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import AddNew from "./AddNewPage";
import AdminDashboard from "./AdminDashboard";
import Blog from "./Blog";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "blog", login: false };
  }

  changePage = (p) => {
    console.log(p);
    this.setState({
      curpage: p,
    });
  };

  changeToLogin = () => {
    console.log("in");
    this.setState({
      login: true,
      curpage: "login",
    });
  };

  changeToLogout = () => {
    console.log("out");
    this.setState({
      login: false,
      curpage: "home",
    });
  };

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="nav-menu">
            <h1>
              <span>
                <BsFillHouseFill />
                Diaz Sifontes
              </span>
            </h1>
            {/* <ul> */}
            <span>
              <button
                className={`nav-button ${
                  this.state.curpage === "home" ? "ses" : ""
                }`}
                onClick={() => this.changePage("home")}
              >
                Home
              </button>
            </span>
            <span>
              <button
                className={`nav-button ${
                  this.state.curpage === "about" ? "ses" : ""
                }`}
                onClick={() => this.changePage("about")}
              >
                About
              </button>
            </span>
            <span>
              <button
                className={`nav-button ${
                  this.state.curpage === "contact" ? "ses" : ""
                }`}
                onClick={() => this.changePage("contact")}
              >
                Contact
              </button>
            </span>
            <span>
              <button
                className={`nav-button ${
                  this.state.curpage === "blog" ? "ses" : ""
                }`}
                onClick={() => this.changePage("blog")}
              >
                Blog
              </button>
            </span>
            {this.state.login && (
              <span>
                <button
                  className={`nav-button ${
                    this.state.curpage === "userdash" ? "ses" : ""
                  }`}
                  onClick={() => this.changePage("userdash")}
                >
                  Dashboard
                </button>
              </span>
            )}
            {!this.state.login && (
              <span>
                <button
                  className={`nav-button`}
                  onClick={() => this.changeToLogin()}
                >
                  Login
                </button>
              </span>
            )}
            {!this.state.login ? (
              <span>
                <button
                  className={`nav-button ${
                    this.state.curpage === "register" ? "ses" : ""
                  }`}
                  onClick={() => this.changePage("register")}
                >
                  Register
                </button>
              </span>
            ) : (
              <span>
                <button
                  className={`nav-button`}
                  onClick={() => this.changeToLogout()}
                >
                  Logout
                </button>
              </span>
            )}
            <div className="hamicon">
              <HiOutlineMenuAlt4 className="hamburger" />
            </div>
            {/* </ul> */}
          </div>
        </div>
        <div className="uppermargin">
          {this.state.curpage === "home" && <Homepage></Homepage>}
          {this.state.curpage === "about" && <About></About>}
          {this.state.curpage === "userdash" && (
            <Dashboard
              username="dummy"
              addnewfun={() => this.changePage("addnewpage")}
            />
          )}
          {this.state.curpage === "contact" && <ContactUs />}
          {this.state.curpage === "login" && (
            <Login
              forgotpass={() => this.changePage("forgotpass")}
              userdash={() => this.changePage("userdash")}
              admindash={() => this.changePage("admindash")}
            ></Login>
          )}
          {this.state.curpage === "register" && <Register></Register>}
          {this.state.curpage === "admindash" && (
            <AdminDashboard></AdminDashboard>
          )}
          {this.state.curpage === "addnewpage" && <AddNew></AddNew>}
          {this.state.curpage === "forgotpass" && (
            <ForgotPassword></ForgotPassword>
          )}
          {this.state.curpage ==="blog" && <Blog></Blog>}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Parent;
