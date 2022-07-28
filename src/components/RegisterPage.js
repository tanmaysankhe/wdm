import React from "react";
import './css/Login.css'

class Register extends React.Component {
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
            <div className="form-container">
               <form className="form-box">
                    <input className="text-box" type="text" placeholder="Name"/><br/>
                    <input className="text-box" type="text" placeholder="Email"/><br/>
                    <input className="text-box" type="text" placeholder="Confirm Password"/><br/>
                    <input className="text-box" type="text" placeholder="Password"/><br/>
                    <select className="text-box">
                        <option>Miss. Zulfiya</option>
                        <option>Dear  ZulfIya</option>
                        <option>Respected Zulfiya</option>
                        <option>Mr. Waseem</option>
                        <option>Not Dear Waseem</option>
                        <option>Not respected Waseem</option>
                    </select><br/>
                    <select className="text-box">
                        <option>Miss. Zulfiya</option>
                        <option>Dear  ZulfIya</option>
                        <option>Respected Zulfiya</option>
                        <option>Mr. Waseem</option>
                        <option>Not Dear Waseem</option>
                        <option>Not respected Waseem</option>
                    </select><br/>
                    {/* <input type="checkbox">Admin</input> */}
                    <button className="login-button">Register</button>
               </form>
            </div>

        );
    }
}
export default Register;