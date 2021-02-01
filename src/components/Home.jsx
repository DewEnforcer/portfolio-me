import React, { useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import {getHomeInfo} from "../services/homeService";

export default function Home() {
    const [homeData, setHomeData] = useState("");

    const getHomeData = async () => {
        const {data} = await getHomeInfo();

        setHomeData(data)
    }

    useEffect(() => {
        getHomeData()
    }, []) 

    return (
        <div className="home_container">
            <TextContainer text={homeData} title="Vítejte!"/>
        </div>
    )
}
