/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import axios from "axios";
import React from "react";
import "./css/Login.css";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curpage: "about",
      login: false,
      email: "",
      password: "",
      emailError: "",
      passError: ""
    };
  }

  changePage = (p) => {
    this.setState({
      curpage: p,
    });
  };

  changeToLogin = () => {
    console.log("in");
    this.setState({
      login: true,
      curpage: "dash",
    });
  };

  changeToLogout = () => {
    console.log("out");
    this.setState({
      login: false,
      curpage: "home",
    });
  };

  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    }, () => { this.validateField(name, value) });
  };

  validateField(fieldName, value) {
    let emailValid = "";
    let pwdValid = "";
    let emailInvalidMessage = this.state.emailError;
    let passwordInvalidMessage = this.state.passError;
    switch (fieldName) {
      case 'email':
        emailValid = /\S+@\S+\.\S+/.test(value);
        emailInvalidMessage = emailValid ? '' : ' Email is invalid';
        break;
      case 'password':
        pwdValid = value.length >= 8
        passwordInvalidMessage = pwdValid ? '' : ' Mininum length required is 8';
        break;
      default:
        break;
    }
    this.setState({
      emailError:emailInvalidMessage,
      passError:passwordInvalidMessage
    });
  }
  handleSubmit = (e, onSubmitProps) => {
    e.preventDefault();
    console.log("IN HANDLE")
    // let formData = new FormData();
    // formData.append("email", this.state.email);
    // formData.append("testpwd", this.state.password);
    let body = {
      "email":this.state.email,
      "testpwd":this.state.password
    };
    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/login.php';
    axios.post(url, body)
      .then(res => this.handleSucess(res))
      .catch(err => alert("Authentication failed"));
  }

  handleSucess = (res) =>{
    console.log(res.data);  
    if(true){
      window.sessionStorage.setItem("currUsername", res.data.FullName);
      window.sessionStorage.setItem("currUserID", res.data.UserID);
      window.sessionStorage.setItem("currUserEmail", res.data.UserEmail);
      this.props.userdash();
      console.log("Login success");
    }  
  }


  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1 className="headingform">Login</h1>
          <input
            className="text-box"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          /><span style={{"color":"red"}}>{this.state.emailError}</span>
          <br />
          <input
            className="text-box"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          /><span style={{"color":"red"}}>{this.state.passError}</span>
          <br />
          <label class="form-control">
            <input type="radio" checked="checked" name="radio" />
            User
            <input type="radio" name="radio" />
            Admin
          </label>
          <br></br>
          <button className="normal-button" onClick={this.handleSubmit}>
            Login(User Dashboard)
          </button>
          <button className="normal-button" onClick={this.props.forgotpass}>
            Forgot Password
          </button>
          <button className="normal-button" onClick={this.props.admindash}>
            Admin(Testing purpose)
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
