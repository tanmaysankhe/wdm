import React from "react";
import "./css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "about", login: false };
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

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1 className="headingform">Login</h1>
          <input className="text-box" type="text" placeholder="Email" />
          <br />
          <input className="text-box" type="text" placeholder="Password" />
          <br />
          <label class="form-control">
            <input type="radio" checked="checked" name="radio" />
            User
            <input type="radio" name="radio" />
            Admin
          </label>
          <button className="login-button">Login</button>
          <button className="login-button" onClick={this.props.forgotpass}>
            Forgot Password
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
