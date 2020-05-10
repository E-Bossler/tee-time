import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

function Footer() {
    return (
        <div id="footer-container">
            <ul id="footer-list">
                <li className="footer-item">
                    <Link 
                        id="stats-link" 
                        className="footer-link" 
                        to="/dashboard/userMenu/stats">
                        Stats
                    </Link>
                </li>
                <li className="footer-item">
                    <Link 
                        id="courses-link" 
                        className="footer-link" 
                        to="/dashboard/userMenu/courses">
                        Courses
                    </Link>
                </li>
                <li className="footer-item">
                    <Link 
                        id="friends-link" 
                        className="footer-link"
                        to="/dashboard/userMenu/friends">
                        Friends
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;