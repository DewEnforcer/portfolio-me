import React from 'react'
import Navigation from './Navigation'

const navItems = [
    {id: 1, path: "/home", label: "Domů"},
    {id: 2, path: "/projects", label: "Mé projekty"},
    {id: 3, path: "/projects?isStudy=true", label: "Studijní projekty"},
    {id: 4, path: "/about", label: "O mně"},
]

export default function Header() {
    return (
        <div className="header">
            <Navigation navItems={navItems}/>
        </div>
    )
}
