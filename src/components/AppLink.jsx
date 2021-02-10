import React from 'react'
import { Link } from 'react-router-dom'

export default function AppLink({to, label}) {
    return (
        <Link className="btn_link" to={to}>{label} <i className="fa fa-arrow-right"></i></Link>
    )
}
