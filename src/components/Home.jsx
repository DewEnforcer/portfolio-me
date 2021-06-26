import React, { useContext, useEffect, useState } from 'react'
import parse from 'html-react-parser';

import {getHomeInfo} from "../services/homeService";

import Loader from './Loader';
import AppLink from './AppLink';

import LanguageContext from '../context/LanguageContext';

export default function Home() {
    const {language} = useContext(LanguageContext);
    const [homeData, setHomeData] = useState();

    const getHomeData = async () => {
        const {data} = await getHomeInfo();
        console.log(data);
        setHomeData(data)
    }

    useEffect(() => {
        getHomeData()
    }, []) 

    if (!homeData) return <Loader/>

    return (
        <div className="home_container">
            {homeData[language].text.map((t, i) => <h1 key={i}>{parse(t)}</h1>)}
            <AppLink label={homeData[language].btnLabel} to="/projects"/>
        </div>
    )
}
