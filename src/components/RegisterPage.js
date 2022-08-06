/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

import axios from "axios";
import React from "react";
import "./css/Login.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curpage: "about",
     login: false,
     email: "",
     password: "",
     username:"",
     confpass:"",
     emailError: "",
     passError: "",
     usernameError:"",
     confpassError:""
    };
  }

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
    let cpassvalid = "";
    let usernamevalid = "";
    let emailInvalidMessage = this.state.emailError;
    let passwordInvalidMessage = this.state.passError;
    let usernameInvalidMessage = this.state.usernameError;
    let confpassInvalidMessage = this.state.confpassError;
    switch (fieldName) {
      case 'email':
        emailValid = /\S+@\S+\.\S+/.test(value);
        emailInvalidMessage = emailValid ? '' : ' Email is invalid';
        break;
      case 'password':
        pwdValid = value.length >= 8
        passwordInvalidMessage = pwdValid ? '' : ' Mininum length required is 8';
        break;
      case 'username':
        usernamevalid = value.length >= 1
        usernameInvalidMessage = usernamevalid ? '' : ' Cannot be blank';
        break;
      case 'confpass':
          cpassvalid = value === this.state.password;
          confpassInvalidMessage = cpassvalid ? '' : ' Password not matching';
          break;
      default:
        break;
    }
    this.setState({
      emailError:emailInvalidMessage,
      passError:passwordInvalidMessage,
      usernameError:usernameInvalidMessage,
      confpassError:confpassInvalidMessage
    });
  }

  handleSubmit = (e, onSubmitProps) => {
    e.preventDefault();
    console.log("IN HANDLE")
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("testpwd", this.state.password);
    formData.append("fullname", this.state.username);
    let body = {
      "email":this.state.email,
      "testpwd":this.state.password
    };
    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/register.php';
    axios.post(url, formData)
      .then(res => this.handleSucess(res))
      .catch(err => console.log(err));
  }

  handleSucess = (res) =>{
    console.log(res.data);  
    if(res.data.includes("Something went wrong")){
      alert("Authentication failed");
    }
    else{
      this.props.userdash();
      console.log("Login success");
    }  
  }


  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1 className="headingregister">SignUp</h1>
          <input className="text-box" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Name" />
          <br /><span style={{"color":"red"}}>{this.state.usernameError}</span><br/>
          <input className="text-box" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <br />
          <span style={{"color":"red"}}>{this.state.emailError}</span><br/>
          <input
            name="password"
            className="text-box"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br /><span style={{"color":"red"}}>{this.state.passError}</span><br/>
          <input className="text-box" type="password" name="confpass" value={this.state.confpass} onChange={this.handleChange} placeholder="Confirm Password" />
          <br />
          <span style={{"color":"red"}}>{this.state.confpassError}</span><br/>
          <label for="standard-select" className="headin">
            Ancestor
          </label>
          <div class="select">
            <select id="standard-select">
              {/* <option value="Option length">Select Ancestor</option> */}
              <option value="Option 1" selected>Diaz</option>
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
              {/* <option value="Option length">Select Relationship</option> */}
              <option value="Option 1" selected>Father</option>
              <option value="Option 2">Mother</option>
              <option value="Option 3">Wife</option>
              <option value="Option 4">Son</option>
              <option value="Option 5">Daughter</option>
            </select>
          </div>

          <br />
          {/* <input type="checkbox">Admin</input> */}
          <button className="normal-button normal-button" onClick={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}
export default Register;
