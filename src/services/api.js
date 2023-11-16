import axios from "axios";

export const api = axios.create({
    // baseURL: "https://ayancare-api.cyclic.cloud/v1/ayan",
    baseURL: "http://localhost:8080/v1/ayan",
});

// POST
export const createSessionUsuarioAutenticar = async (email, senha) => {

    console.log({ email, senha });
    return (await api.post("/usuario/autenticar", { email, senha })
    )

}

export const createUsuario = async (nome, data_nascimento, email, senha, id_genero) => {

    console.log({ nome, data_nascimento, email, senha, id_genero });
    return await api.post("/cuidador", { nome, data_nascimento, email, senha, id_genero })
}

export const createRelatorio = async (relatorio) => {

    console.log(relatorio);
    return (
        await api.post("/relatorio", relatorio)
    )
}
export const createQuestionarioRelatorio = async (questionario) => {

    console.log(questionario);
    return (
        await api.post("/questionario", questionario)
    )
}

export const createConexaoUsuarios = async (id_cuidador, id_paciente) => {
    console.log(3, { id_cuidador, id_paciente });

    try {
        const response = await api.post(`/conectar?idCuidador=${id_cuidador}&idPaciente=${id_paciente}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erro na conexão de contas:', error);
        throw error;
    }
}


//GET
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
export const getPacienteById = async (idPaciente) => {

    try {
        const response = await api.get(`/paciente/${idPaciente}`);
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de paciente:', error);
        throw error;
    }

}

export const getRelatorioByIDCuidador = async (id_cuidador) => {
    try {
        const response = await api.get(`/relatorios`, {
            params: {
                idCuidador: id_cuidador
            }
        });
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de cuidador:', error);
        throw error;
    }
}

export const getPacientesByIDCuidador = async (id_cuidador) => {
    try {
        const response = await api.get(`/conexoes`, {
            params: {
                idCuidador: id_cuidador
            }
        });
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de cuidador:', error);
        throw error;
    }
}

export const getPerguntasQuestionarioRelatorio = async () => {
    try {
        const response = await api.get(`/perguntas`);
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de perguntas do questionario:', error);
        throw error;
    }
}
