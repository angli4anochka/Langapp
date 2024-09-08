import React from "react"
import { Link } from 'react-router-dom';



function Header() {
    return (
      <>
    <header className="header">
      <div className="center">
      <ul className="ul__header">
        <li className="mycloud">
          <span className="mycloud__text">Сказки</span>
        </li>
        <li className="mycloud2">
        <Link to="/achievements" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span className="mycloud__text2">Достижения</span>
        </Link>
        </li>
        <li className="mycloud3">
        <span className="mycloud__text3">Наша миссия</span>
        </li>
        </ul>
      </div>
    </header>
    </>
    )

}

export default Header
