import React, { useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import {getAbout} from "../services/aboutService";
import Loader from './Loader';
import SidebarList from './SidebarList';

const skills = ["HTML", "CSS", "JS", "React", "React-native", "Node.js", "C#", "PHP"];

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
            <div className="about_text_wrapper">
                <h1>{about.title}</h1>
                {about.text.map((p, i) => <TextContainer cls="about_text_container" text={p} key={i} hasBg={false}/>)}
            </div>
            <SidebarList title="Pracuji s" cls="skills_container" items={skills}/>
        </div>
    )
}
