import React, { useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import {getAbout} from "../services/aboutService";
import Loader from './Loader';
import RepoList from "./projects/RepoList";

export default function About() {
    const [about, setAbout] = useState();

    const fetchAbout = async () => {
        const {data} = await getAbout();
        setAbout(data);
    }

    useEffect(() => {
        fetchAbout();
    }, []);

    if (!about) return <Loader/>

    return (
        <div className="about_container bg-light">
            <img src={about.image} alt="That's supposed to be me:)"/>
            <div className="wrapper">
                <TextContainer title={about.title} hasBg={false}/>
                {about.text.map((p, i) => <TextContainer text={p} key={i} hasBg={false}/>)}
                <RepoList repos={about.links}/>
            </div>
        </div>
    )
}
