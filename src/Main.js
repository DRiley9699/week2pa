import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/ContactMe";
import Favorite from "./Components/FavoriteHobbies";

class Main extends Component {
    render() {
    return (
        <HashRouter>
            <div>
                <h1>2.5 Performance Assessment | Derek Riley</h1>
                <ul className="header">
                    <li id="homenav"><NavLink  to="/">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact Me</NavLink></li>
                    <li><NavLink to="/favorite">My Hobbies</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;