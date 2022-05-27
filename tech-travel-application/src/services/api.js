import axios from "axios";

const api = axios.create({
    baseURL: "https://6286b5747864d2883e78b416.mockapi.io"
});

export default api;