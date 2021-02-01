import React, { useEffect, useState } from 'react'
import TextContainer from './TextContainer'
import projectService from "../services/projectService";
import ProjectPreviewList from './projects/ProjectPreviewList';
import Loader from './Loader';

export default function Projects({location}) {
    const query = new URLSearchParams(location.search);
    const endPoint = query.get("isStudy") ? "/study" : "";
    const [projects, setProjects] = useState();

    const getProjects = async () => {
        const {data} = await projectService.getProjects(endPoint);
        setProjects(data);
    }

    useEffect(() => {
        getProjects();
    }, [location]);

    if (!projects) return <Loader/>

    return (
        <div className="projects_container">
            <TextContainer title={projects.title} text={projects.about}/>
            <ProjectPreviewList projects={projects.list}/>
        </div>
    )
}
