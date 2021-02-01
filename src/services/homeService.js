import http from "./httpservice";

const endPoint = "/home";

export const getHomeInfo = () => http.get(endPoint);

