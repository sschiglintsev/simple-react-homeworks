import React from 'react'
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div>
            <h1 className="text-jumbo text-ginormous">Oops!</h1>
            <div>Error code: 404</div>
            <h2>We can't seem to find the page you're looking for</h2>
            <ul className="list-unstyled">
                <li>Here are some helpful links instead:</li>
                <li><NavLink to={'/'} >pre_junior</NavLink></li>
                <li><NavLink to={'/junior'}>junior</NavLink>
                </li>
                <li><NavLink to={'/junior-plus'}>junior+</NavLink></li>

            </ul>

        </div>
    )
}

export default Error404
