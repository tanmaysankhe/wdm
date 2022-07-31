import React from "react";
import "./css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "about", login: false, email: "", password: "" };
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
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };

  handleLogin = () => {
    if (this.state.email.trim().length === 0) {
      alert("Email or password is blank");
    }
    if (this.state.email === "root" && this.state.password === "password") {
      alert("Login");
    }
  };

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
          />
          <br />
          <input
            className="text-box"
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label class="form-control">
            <input type="radio" checked="checked" name="radio" />
            User
            <input type="radio" name="radio" />
            Admin
          </label>
          <br></br>
          <button className="normal-button" onClick={this.handleLogin}>
            Login
          </button>
          <button className="normal-button" onClick={this.props.forgotpass}>
            Forgot Password
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
