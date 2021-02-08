import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectPreview({project}) {
    const {id, thumbnail, title, about, isStudy} = project;

    return (
        <div className="project_preview_container bg-secondary text-white">
            <img className="grid_img" src={thumbnail} alt="Thumbnail img"/>
            <h2 className="grid_title">{title}</h2>
            <p className="grid_subtitle">{about[0]} <Link to={{pathname: `/project/${id}`, state: {isStudy}}}>Zobrazit více...</Link></p>
        </div>
    )
}
