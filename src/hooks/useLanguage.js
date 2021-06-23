import  { useState } from 'react'

const allowedKeys = ["cz", "en"];

const useLanguage = () => {
    const [language, setLanguage] = useState("cz");

    const updateLanguage = newLang => {
        if (newLang === language || !allowedKeys.includes(newLang)) return;

        setLanguage(newLang);
    }

    return [language, updateLanguage];
}

export default useLanguage;