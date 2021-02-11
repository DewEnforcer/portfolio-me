import React, { useEffect, useState } from 'react'
import {getProjectById, getStudyProjectById} from "../../services/projectService";
import BtnNavigateBack from "../BtnNavigateBack"
import ImageDisplay from '../ImageDisplay';
import ImageList from '../ImageList';
import Loader from '../Loader';
import SidebarList from '../SidebarList';
import TextContainer from '../TextContainer';
import RepoList from './RepoList';

export default function Project({match, location, history}) {
    const {id} = match.params;
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(false);
    const [displayOpen, setDisplayOpen] = useState(false);
    const [displayUrl, setDisplayUrl] = useState();
    
    const getProject = async () => {
        setLoading(true);
        const {data} = location.state.isStudy === false ? await getProjectById(id) : await getStudyProjectById(id);
        setLoading(false);

        setProject(data);
        setDisplayUrl(data.images[0]);
    }

    useEffect(() => {
        getProject();
    }, [])

    const handleOpenImage = url => {
        setDisplayUrl(url);
        setDisplayOpen(true);
    }
    const handleCloseImage = () => {
        setDisplayUrl(null);
        setDisplayOpen(false);
    }
    const navigateBack = () => {
        history.goBack();
    }

    if (loading) return <Loader/>
    if (!project) return null;

    const {title, about, tech, repos, images} = project;
    return (
        <div className="project_container">
            <BtnNavigateBack onClick={navigateBack}/>
            <div className="project_about_text">
                <RepoList title="Repos" repos={repos}/>
                <div className="project_text_wrapper">
                    <h1>{title}</h1>
                    {about.map((p,i) => <TextContainer key={i} text={p}/>)}
                </div>
                {tech && <SidebarList title="Použité technologie" items={tech}/>}
            </div>
            <ImageList images={images} onClick={handleOpenImage}/>
            <ImageDisplay imageUrl={displayUrl} visible={displayOpen} onClose={handleCloseImage}/>
        </div>
    )
}
