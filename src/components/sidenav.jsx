import React from 'react'
import { Link } from "react-router-dom";

export default function SideNav (props) {
  return (
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Satish Singaram</h3>
        </div>
        <ul className="list-unstyled components">
            <li>
                <Link to="/Intro">Intro</Link>
            </li>
            <li>
                <Link to="/awards">Awards</Link>
            </li>
        </ul>
    </nav>
  )
}
