import React from 'react'
import { Link } from 'react-router-dom';

import btnTexts from "../../texts/btnTexts";

export default function ProjectPreview({project, lang, onClick}) {
    const {id, thumbnail, title, about, isStudy} = project;

    return (
        <div className="project_preview_container bg-secondary text-white">
            <div className="grid_img" style={{backgroundImage: "url('"+thumbnail+"')"}}></div>
            <div className="project_text_box">
                <h2 className="grid_title">{title}</h2>
                <div className="grid_subtitle">
                    <p>{about[lang][0]}</p>
                </div>
                <Link onClick={onClick} to={{pathname: `/project/${id}`, state: {isStudy}}}>{btnTexts[lang]["proj_prev_show_more"]}</Link>
            </div>
        </div>
    )
}
