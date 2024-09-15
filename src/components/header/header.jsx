import React from "react";
import {Link} from 'react-router-dom';
import s from './header.module.css';

function Header() {
  return (
    <>
      <header className={s.header}>
        <div className={s.center}>
          <ul className={s.ul__header}>
            <li className={s.mycloud}>
              <span className={s.mycloud__text}>Языки</span>
            </li>
            <li className={s.mycloud2}>
              <Link to="/achievements" className={s.achievementsLink}>
                <span className={s.mycloud__text2}>Достижения</span>
              </Link>
            </li>
            <li className={s.mycloud3}>
              <span className={s.mycloud__text3}>Наша миссия</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
