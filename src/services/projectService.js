import http from "./httpservice";

const endPoint = "/projects"

export const getProjects = data => http.get(`${endPoint}${data}`);

export const getProjectById = id => http.get(`${endPoint}/${id}`);

export const getStudyProjectById = id => http.get(`${endPoint}/study/${id}`);

export default {
    getProjects,
    getProjectById
}