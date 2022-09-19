import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.sideBar}>
            <div>
                <NavLink to={'/'} className={s.navLink}>PREJUNIOR </NavLink>
                <NavLink to={'/junior'} className={s.navLink}>JUNIOR </NavLink>
                <NavLink to={'/junior+'} className={s.navLink}>JUNIOR+ </NavLink>
            </div>
            <div className={s.btn}></div>
        </div>
    )
}

export default Header
