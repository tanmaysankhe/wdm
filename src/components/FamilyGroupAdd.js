/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */
import axios from "axios";
import React from "react";
import "./css/Login.css";

class FamilyGroupAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName:"",
      familyID:""
    };
  }


  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleAddTrial = (e) => {
    e.preventDefault();
    let body = {
      "groupName": this.state.groupName,
      "familyID": this.state.familyID,
    };

    console.log(body);
    const url = 'https://txs8004.uta.cloud/backend/addFamilyGroup.php';
    axios.post(url, body)
      .then(res => this.handleSucess(res))
      .catch(err => alert("Operation failed"));
  }

  handleSucess = (res) => {
    console.log(res);
    alert("Success!");
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-box">
          <h1>Family Group</h1>
          

          <br />

          <div>
            <div>
              <input
                className="text-box"
                type="text"
                placeholder="Group Name"
                name="groupName"
                value={this.state.groupName}
                onChange={this.handleChange}
              />
              <input
                className="text-box"
                type="text"
                placeholder="Family ID"
                name="familyID"
                value={this.state.familyID}
                onChange={this.handleChange}
              />
              <br></br>
              <button className="normal-button" onClick={this.handleAddTrial}>
                Add Family to Group
              </button>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FamilyGroupAdd;
