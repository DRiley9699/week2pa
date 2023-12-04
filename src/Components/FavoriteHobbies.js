import React, { Component } from "react";
import pic from "./2.5 doodles pic.jpg"

class Favorite extends Component {
    render() {
        return (
            <div>
                <h2>FAVORITE HOBBIES!</h2>
                <p>Hobbies are great and everyone should have at least one,
                    this list compiles a few of mine.</p>
                <img src={pic} alt=""/>
                <ul>
                    <li>Schoolwork</li>
                    <li>Drawing and Animation</li>
                    <li>Playing with my children</li>
                    <li>Gaming with friends</li>
                </ul>
            </div>
        );
    }
}

export default Favorite;