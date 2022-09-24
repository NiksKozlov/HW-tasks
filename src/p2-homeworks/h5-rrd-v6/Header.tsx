import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from './Pages';

function Header() {
    return (
        <div className={s.sideBar}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.navLink} >pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.navLink}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.navLink}>junior+ </NavLink>
            <div className={s.btn}></div>
        </div>
    )
}

export default Header
