import React, { Component } from 'react';
import Navbar1 from '../sub/navbars';
import Footer1 from '../sub/footers';
import '../css/forms.css';
import MyImage from '../pages/01.png';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            emailaddress: "",
            password: "",
            confirmpassword: "",
            gender: "male", // added gender to state
        }
    }

    // handle gender change
    handleGenderChange = e => {
        const { value } = e.target;
        this.setState({ gender: value });
    }

    inputValue = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    FormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.editid) {
            let data = {
                username: this.state.username,
                emailaddress: this.state.emailaddress,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
                gender: this.state.gender, // added gender to data
            }

            axios.post("http://localhost:4000/api/post", data).then(res => {

                this.setState({
                    username: "",
                    emailaddress: "",
                    password: "",
                    confirmpassword: "",
                    gender: "male", // reset gender to default value after form submission
                })

            })

        } else {
            let data = {
                _id: this.state._id,
                username: this.state.username,
                emailaddress: this.state.emailaddress,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
                gender: this.state.gender, // added gender to data
            }

            axios.put("http://localhost:4000/Loginform/Update/", data).then(res => {
                this.setState({
                    username: "",
                    emailaddress: "",
                    password: "",
                    confirmpassword: "",
                    gender: "male", // reset gender to default value after form submission
                })
            })

        }
    }

    render() {
        return (
            <div>
                <Navbar1 />
                <br />
                <br />
                <main className="responsive_container">
                    <img src={MyImage} alt="horse" />

                    <form  onSubmit={this.FormSubmit} >
                        <h1>Register</h1>
                        <div className="group">
                            <br />
                            <label htmlFor="username" className="username">
                                Username
                            </label>
                            <input type="text" name="username" id="username" value={this.state.username} onChange={this.inputValue} className="username" required="" />
                        </div>
                        <div className="group">
                            <label htmlFor="emailaddress">Email Address</label>
                            <input type="email" name="emailaddress" id="emailaddress" value={this.state.emailaddress} onChange={this.inputValue} className="emailaddress" required="" />
                        </div>
                        <div className="group">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" value={this.state.gender} onChange={this.handleGenderChange} required="">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                            </select>
                        </div>
                        <div className="group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={this.state.password} onChange={this.inputValue} className="password" required="" />

                        </div>
                        <div className="group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" name="confirmpassword" id="confirmpassword" value={this.state.confirmpassword} onChange={this.inputValue} className="confirmpassword" required="" />
                        </div>
                        <div className="group">
                            <button type="submit" className="btn">
                                Register
                            </button>
                            <br />
                        </div>
                    </form>
                </main>
                <br />
                <br />
                <Footer1 />
            </div>
        );
    }
}

export default Home;