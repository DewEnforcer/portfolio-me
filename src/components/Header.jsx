import React, { useEffect } from 'react'
import useLanguage from '../hooks/useLanguage'
import Navigation from './Navigation'

const DEF_LANGSWITCH_CLS = "lang_switcher"

export default function Header({navItems = []}) {
    const [language, setLanguage] = useLanguage();

    const getActiveClass = lang => {
        if (lang === language) return DEF_LANGSWITCH_CLS + "_active";

        return DEF_LANGSWITCH_CLS;
    }

    return (
        <div className="header">
            <Navigation navItems={navItems}/>
            <div className="lang_switcher_wrapper">
                <span className={getActiveClass("cz")} onClick={() => setLanguage("cz")}>CZ</span>
                <span className={getActiveClass("en")} onClick={() => setLanguage("en")}>EN</span>
            </div>
        </div>
    )
}
