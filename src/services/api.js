import axios from "axios";

export const api = axios.create({
        baseURL: "https://ayancare-api.cyclic.cloud/v1/ayan",
});

export const createSessionUsuarioAutenticar = async (email, senha) => {

    console.log( { email, senha });
    return await api.post("/usuario/autenticar", { email, senha }) 

}

// bomdia40028922