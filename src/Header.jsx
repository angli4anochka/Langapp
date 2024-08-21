import React from "react"
import { Link } from 'react-router-dom';



function Header() {
    return (
    <header className="header">
      <ul className="ul__header">
        <li>сказки</li>
        <li>
        <Link to="/achievements" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>достижения</p>
            </Link></li>
        <li>наша миссия</li>
      </ul>
    </header>
    )
}

export default Header
