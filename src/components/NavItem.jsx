import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import LanguageContext from '../context/LanguageContext'

export default function NavItem({path, label}) {
    const {language} = useContext(LanguageContext);

    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={path}>{label[language]}</NavLink>
        </li>
    )
}
