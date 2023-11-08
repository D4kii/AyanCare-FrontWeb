import axios from "axios";

export const api = axios.create({
    // baseURL: "https://ayancare-api.cyclic.cloud/v1/ayan",
    baseURL: "http://localhost:8080/v1/ayan",
});

export const createSessionUsuarioAutenticar = async (email, senha) => {

    console.log({ email, senha });
    return (await api.post("/usuario/autenticar", { email, senha })
    )

}

export const createUsuario = async (nome, data_nascimento, email, senha, id_genero) => {

    console.log({ nome, data_nascimento, email, senha, id_genero });
    return await api.post("/cuidador", { nome, data_nascimento, email, senha, id_genero })
}

export const getCuidador = async (token, idCuidador) => {

    try {
        const response = await api.get(`/cuidador/${idCuidador}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de cuidador:', error);
        throw error;
    }
      
}
