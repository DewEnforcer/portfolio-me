import React, { useContext, useEffect } from 'react'
import LanguageContext from '../context/LanguageContext';
import Navigation from './Navigation'

const DEF_LANGSWITCH_CLS = "lang_switcher"

export default function Header({navItems = [], mark = null}) {
    const {language, setLanguage} = useContext(LanguageContext);

    const getActiveClass = lang => {
        if (lang === language) return DEF_LANGSWITCH_CLS + "_active";

        return DEF_LANGSWITCH_CLS;
    }

    return (
        <div className="header">
            {mark && <span className="header_logo">{mark}</span>}
            <Navigation navItems={navItems}/>
            <div className="lang_switcher_wrapper">
                <span className={getActiveClass("cz")} onClick={() => setLanguage("cz")}>CZ</span>
                <span className={getActiveClass("en")} onClick={() => setLanguage("en")}>EN</span>
            </div>
        </div>
    )
}
