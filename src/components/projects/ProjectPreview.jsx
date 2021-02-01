import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectPreview({project}) {
    const {id, images, title, about, isStudy} = project;

    const thumbnail = images[0] ? images[0] : null;

    return (
        <div className="project_preview_container bg-secondary text-white">
            <img className="grid_img" src={thumbnail} alt="Thumbnail img"/>
            <h2 className="grid_title">{title}</h2>
            <p className="grid_subtitle">{about[0]} <Link to={{pathname: `/project/${id}`, state: {isStudy}}}>Zobrazit více...</Link></p>
        </div>
    )
}
