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
     confpassError:"",
     relation:"",
     ancestor:"",
     allAncestor:[],
     buttonDisable:""
    };
  }

  componentDidMount() {
    axios
        .get(
            "https://txs8004.uta.cloud/backend/getfamily.php"
        )
        .then(res => {
            this.setState({ allAncestor: res.data});
        })
        .catch(error => console.log(error));
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
    }, ()=> this.disableButton());
  }

  handleSubmit = (e, onSubmitProps) => {
    e.preventDefault();
    console.log("IN HANDLE")
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("testpwd", this.state.password);
    formData.append("fullname", this.state.username);
    formData.append("ancestor", this.state.ancestor);
    formData.append("relation", this.state.relation);
    const found = this.state.allAncestor.find(anc => anc.FamilyID === this.state.ancestor);
    formData.append("familyName", found.FamilyName);
    console.log(found);
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

  disableButton = () => {
    if(this.state.emailError === "" && this.state.passError === "" && this.state.confpassError === ""){
      this.setState({buttonDisable:""})
    }
    else{
      this.setState({buttonDisable:"disabled"})
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
            <select id="standard-select" onChange={this.handleChange} name="ancestor" value={this.state.ancestor}>
              {this.state.allAncestor.map(anc => (
              <option value={anc.FamilyID}>{anc.FamilyName}</option>
              ))}
            </select>
          </div>

          <label for="standard-select" className="headin">
            Relationship
          </label>
          <div class="select">
            <select id="standard-select" onChange={this.handleChange} name="relation" value={this.state.relation}>
              <option value="Father" selected>Father</option>
              <option value="Mother">Mother</option>
              <option value="Wife">Wife</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
            </select>
          </div>

          <br />
          {/* <input type="checkbox">Admin</input> */}
          {!this.state.buttonDisable ? 
        <button className={"normal-button"} 
        onClick={this.handleSubmit}>Register</button>
        :  
        <button className={"dis-button"} disabled>Register</button>
        }
        
          
          
        </form>
      </div>
    );
  }
}
export default Register;
