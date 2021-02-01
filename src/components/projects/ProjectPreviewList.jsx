import React from 'react'
import ProjectPreview from '../projects/ProjectPreview'

export default function ProjectPreviewList({projects}) {
    return (
        <>
            <div className="list_container">
                {projects.map(p => <ProjectPreview key={p.id} project={p}/>)}
            </div>
            {projects.length === 0 && <span>No projects have been found:(</span>}
        </>
    )
}
