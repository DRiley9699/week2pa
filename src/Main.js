import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Components/ShopHome";
import Contact from "./Components/ContactMe";
import Favorite from "./Components/FavoriteHobbies";

class Main extends Component {
    render() {
    return (
        <HashRouter>
            <div id="mainPage">
                <h1>GUNDAM | UNIVERSE</h1>
                <ul className="header">
                    <li id="homenav"><NavLink  to="/">Shop Home</NavLink></li>
                    <li><NavLink to="/favorite">Other Products</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/favorite" element={<Favorite />}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;