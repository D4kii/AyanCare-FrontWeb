import axios from "axios";

export const api = axios.create({
    baseURL: "https://ayancare-api.cyclic.cloud/v1/ayan",
});

export const createSessionUsuarioAutenticar = async (email, senha) => {

    console.log({ email, senha });
    return await api.post("/usuario/autenticar", { email, senha })

}

export const createUsuario = async (nome, data_nascimento, email, senha, cpf, id_endereco_cuidador, id_genero) => {

    return await api.post("/cuidador", { nome, data_nascimento, email, senha, id_genero })
}

// bomdia40028922