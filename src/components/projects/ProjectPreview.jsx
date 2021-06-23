import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectPreview({project}) {
    const {id, thumbnail, title, about, isStudy, lang} = project;

    return (
        <div className="project_preview_container bg-secondary text-white">
            <img className="grid_img" src={thumbnail} alt="Thumbnail img"/>
            <div className="project_text_box">
                <h2 className="grid_title">{title}</h2>
                <p className="grid_subtitle">{about[0]}</p>
                <Link to={{pathname: `/project/${id}`, state: {isStudy}}}>Zobrazit více...</Link>
            </div>
        </div>
    )
}
