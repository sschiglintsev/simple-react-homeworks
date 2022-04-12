import React from 'react'
import {NavLink} from "react-router-dom";
import c from './Header.module.css'
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={c.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={c.link} activeClassName={c.active}>pre_junior</NavLink>----
            <NavLink to={PATH.JUNIOR} className={c.link} activeClassName={c.active}>junior</NavLink>----
            <NavLink to={PATH.JUNIOR_PLUS} className={c.link} activeClassName={c.active}>junior+</NavLink>
        </div>
    )
}

export default Header
