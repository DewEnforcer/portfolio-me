import React, { useContext, useEffect, useRef } from 'react'
import LanguageContext from '../../context/LanguageContext';
import { getPos, savePos } from '../../services/listScrollService';
import ProjectPreview from '../projects/ProjectPreview'

export default function ProjectPreviewList({projects}) {
    const {language} = useContext(LanguageContext);
    const listRef = useRef();

    const handleSaveScrollPos = () => {
        savePos(listRef.current.scrollTop);
    }

    useEffect(() =>{
        listRef.current.scrollTop = getPos();
    }, [])

    return (
        <>
            <div ref={listRef} className="list_container">
                {projects.sort((a, b) => (a.id - b.id)).reverse().map(p => <ProjectPreview onClick={handleSaveScrollPos} key={p.id} project={p} lang={language}/>)}
            </div>
            {projects.length === 0 && <span>No projects have been found:(</span>}
        </>
    )
}
