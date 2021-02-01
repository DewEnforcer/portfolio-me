import React from 'react'
import NavItem from './NavItem'

export default function Navigation({navItems}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navItems.map(n => <NavItem key={n.id} path={n.path} label={n.label}/>)}
            </ul>
        </nav>
    )
}
