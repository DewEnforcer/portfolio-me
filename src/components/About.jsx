import React, { useContext, useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import {getAbout} from "../services/aboutService";
import Loader from './Loader';
import SidebarList from './SidebarList';
import LanguageContext from '../context/LanguageContext';

export default function About() {
    const [about, setAbout] = useState();
    const {language} = useContext(LanguageContext);

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
                <h1>{about.title[language]}</h1>
                <TextContainer cls="about_text_container" text={about.text[language]} hasBg={false}/>
            </div>
            <div className='sidebar_lists_wrapper'>
                 <SidebarList title={about.skillsLabel[language]} cls="skills_container" items={about.skills} useGrid={true}/>
                 <SidebarList title={about.contactsLabel[language]} cls="contacts_container" items={about.contacts}/>
            </div>
        </div>
    )
}
