import React, { Component } from 'react';
import Items from './Items';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Expenses",
        }
    }
    render() {
        return (
            <div>
                <Items/>
                <div className="text-center">
                    <h2 className="mt-4">{this.state.title}</h2>
                </div>
            </div>
        );
    }
}

export default SideBar;