import React, { useContext } from 'react'
import enLogo from "../images/en.svg";
import czLogo from "../images/cz.svg";
import LanguageContext from '../context/LanguageContext';

export default function LanguageSwitcher() {

    const {language, setLanguage} = useContext(LanguageContext);

    const handleLanguageSwitch = (newLang) => {
        if (language === newLang) return;

        setLanguage(newLang);
    }

    return (
        <div>
            <img onClick={() => handleLanguageSwitch("en")} className="icon_flag" src={enLogo} alt="english flag"/>
            <img onClick={() => handleLanguageSwitch("cz")} className="icon_flag" src={czLogo} alt="czech flag"/>
        </div>
    )
}
