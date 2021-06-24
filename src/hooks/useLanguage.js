import  { useState } from 'react'

const allowedKeys = ["cz", "en"];

const useLanguage = () => {
    const [language, setLanguage] = useState("cz");

    return [language, setLanguage];
}

export default useLanguage;