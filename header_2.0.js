import React, {Component} from "react";
import "../assets/css/main.css";

class Header extends Component {
    render(){
        return(
            <div>
                <header className="header">
                    <ul className="nav justify-content-center my_nav">
                        <li className="nav-item" onClick={()=>{localStorage.clear()}}>
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/maxwilets/insideoutCRUDproject">Info</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.insideoutdev.com/">About</a>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }

};
export default Header;