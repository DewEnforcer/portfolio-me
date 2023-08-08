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
        setHomeData(data)
    }

    useEffect(() => {
        getHomeData()
    }, []) 

    if (!homeData) return <Loader/>

    return (
        <div className="home_container">
            {homeData[language].text.map((t, i) => <h1 key={i}>{parse(t)}</h1>)}
            <h1 style={{fontSize: "36px", textDecoration: "underline"}}>{homeData[language].warning}</h1>
            <a className='btn_link' href='https://patrikmedek.vercel.app/'>{homeData[language].btnLabel}</a>
        </div>
    )
}
