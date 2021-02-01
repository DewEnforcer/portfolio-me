import http from "./httpservice";

const endPoint = "/about";

export const getAbout = () => http.get(endPoint);