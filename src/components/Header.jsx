import React from 'react'
import Navigation from './Navigation'


export default function Header({navItems = []}) {
    return (
        <div className="header">
            <Navigation navItems={navItems}/>
        </div>
    )
}
