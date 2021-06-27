import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const client = {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}

export default client;