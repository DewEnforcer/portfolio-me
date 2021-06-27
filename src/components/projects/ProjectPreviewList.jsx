import React, { useContext } from 'react'
import LanguageContext from '../../context/LanguageContext';
import ProjectPreview from '../projects/ProjectPreview'

export default function ProjectPreviewList({projects}) {
    const {language} = useContext(LanguageContext);

    return (
        <>
            <div className="list_container">
                {projects.sort((a, b) => (a.id - b.id)).reverse().map(p => <ProjectPreview key={p.id} project={p} lang={language}/>)}
            </div>
            {projects.length === 0 && <span>No projects have been found:(</span>}
        </>
    )
}
