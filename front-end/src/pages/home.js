import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Navbar from "../sub/navbars";

class Home extends Component {
    render() {
        return (
            <div>

                <div>
                    <Navbar/>
                    hi i'm back
                </div>
                
            </div>
        );
    }
}

export default Home;
