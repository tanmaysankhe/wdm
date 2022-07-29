import React from "react";
import "./css/Login.css";

class Register extends React.Component {
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
          <h1 className="headingregister">SignUp</h1>
          <input className="text-box" type="text" placeholder="Name" />
          <br />
          <input className="text-box" type="text" placeholder="Email" />
          <br />
          <input
            className="text-box"
            type="text"
            placeholder="Confirm Password"
          />
          <br />
          <input className="text-box" type="text" placeholder="Password" />
          <br />
          <label for="standard-select" className="headin">
            Ancestor
          </label>
          <div class="select">
            <select id="standard-select">
              <option value="Option length">Select Ancestor</option>
              <option value="Option 1">Diaz</option>
              <option value="Option 2">Sofnetes 2</option>
              <option value="Option 3">Sofnetes Jr</option>
              <option value="Option 4">Charles</option>
              <option value="Option 5">Michael</option>
            </select>
          </div>

          <label for="standard-select" className="headin">
            Relationship
          </label>
          <div class="select">
            <select id="standard-select">
              <option value="Option length">Select Relationship</option>
              <option value="Option 1">Father</option>
              <option value="Option 2">Mother</option>
              <option value="Option 3">Wife</option>
              <option value="Option 4">Son</option>
              <option value="Option 5">Daughter</option>
            </select>
          </div>

          <br />
          {/* <input type="checkbox">Admin</input> */}
          <button className="login-button">Register</button>
        </form>
      </div>
    );
  }
}
export default Register;
