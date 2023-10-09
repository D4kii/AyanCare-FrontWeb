import axios from "axios";

export const api = axios.create({
    baseURL: "https://ayancare-api.cyclic.cloud"
});

export const createSessionUsuarioAutenticar = async (email, password) => {
    return api.post("/usuario/autenticar", { email, password })

}