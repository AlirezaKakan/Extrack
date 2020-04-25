import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu';
import { Link, BrowserRouter } from 'react-router-dom';
import App from './../../App'
import user from './../../images/user.jpeg';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Nav, NavItem } from 'reactstrap';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: "Alireza",
            Lastname: "Kakan",

        }
    }

    render() {
        return (
            <Menu>
                <a className="text-decoration-none" href="#" id="header">
                    <div className="navbar-brand w-100 text-center">
                            <p className="menu-heading">Extrack</p>
                    </div>
                </a>
                
                <div className="text-center">
                    <img src={user} className="text-center mx-auto d-block mt-3 rounded-circle" width="75px" height="75px"/>
                    <h5 className="mx-auto mt-3">{this.state.Firstname} {this.state.Lastname}</h5>
                    <hr className="hr-line w-75"/>
                </div>
                <BrowserRouter>
                    <Link className="ml-3 text-decoration-none menu-item" to="/src/components/Expenses.js"><span className="fa fa-money fa-lg mr-2"></span> Expenses</Link> 
                </BrowserRouter>
            </Menu>
        );
    }
}

export default Items;