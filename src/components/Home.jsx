import React, { useEffect, useState } from 'react'
import {getHomeInfo} from "../services/homeService";
import Loader from './Loader';
import AppLink from './AppLink';

export default function Home() {
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
            <h1>Ahoj, vítej na mém portfóliu!</h1>
            <h1>Věnuji se všem věcem <span className="marked_text">React.js</span> a <span className="marked_text">Node.js</span></h1>
            <AppLink label="Mé projekty" to="/projects"/>
        </div>
    )
}
