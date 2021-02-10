import React, { useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import {getHomeInfo} from "../services/homeService";
import Loader from './Loader';
import { Link } from 'react-router-dom';

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
            <Link className="btn_link" to="/projects">Mé projekty <i className="fa fa-arrow-right"></i></Link>
        </div>
    )
}
