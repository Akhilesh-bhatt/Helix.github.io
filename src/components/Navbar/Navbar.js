import React, { Component } from 'react';
// import { Button } from '../Button';
import { Button } from "../Button"
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
class Navbar extends Component{
    state = { clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
        <>
            <nav className='NavbarItems'>
        

                <h1 className="navbar-logo">C-Helix</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>     
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
               

            </nav>
                    </>
        )
    }
}

export default Navbar;