import axios from "axios";

export const api = axios.create({
    // baseURL: "https://ayancare-api.cyclic.cloud/v1/ayan",
    baseURL: "http://localhost:8080/v1/ayan",
});

// POST
export const createSessionUsuarioAutenticar = async (email, senha) => {

    return (await api.post("/usuario/autenticar", { email, senha })
    )

}

export const createUsuario = async (nome, data_nascimento, email, senha, id_genero) => {

    return await api.post("/cuidador", { nome, data_nascimento, email, senha, id_genero })
}

export const createRelatorio = async (relatorio) => {

    return (
        await api.post("/relatorio", relatorio)
    )
}
export const createQuestionarioRelatorio = async (questionario) => {

    return (
        await api.post("/questionario", questionario)
    )
}

export const createConexaoUsuarios = async (id_cuidador, id_paciente) => {
    console.log(3, { id_cuidador, id_paciente });

    try {
        const response = await api.post(`/conectar?idCuidador=${id_cuidador}&idPaciente=${id_paciente}`);
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
        console.log(2, response.data);
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
export const getTesteHumorByID = async (idTesteHumor) => {

    try {
        const response = await api.get(`/teste/${idTesteHumor}`);
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de teste de humor:', error);
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
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de cuidador:', error);
        throw error;
    }
}
export const getRelatorioHumorbyIdPaciente = async (id_paciente) => {
    try {
        const response = await api.get(`/testes`, {
            params: {
                idPaciente: id_paciente
            }
        });
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de teste de humor:', error);
        throw error;
    }
}

export const getPerguntasQuestionarioRelatorio = async () => {
    try {
        const response = await api.get(`/perguntas`);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de perguntas do questionario:', error);
        throw error;
    }
}

export const getEventosAlarmesByCuidadorAndMes = async (id_cuidador, mes, id_paciente) => {
    try {
        const response = await api.get(`/relatorios`, {
            params: {
                idPaciente: id_paciente,
                mes: mes,
                idCuidador: id_cuidador
            }
        });
        console.log('getEventosAlarmesByCuidadorAndMes====================================');
        console.log(response.data);
        console.log('====================================');
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de calendario:', error);
        throw error;
    }
}

//PUT

export const updateCuidador = async (idCuidador, dados) => {
    try {
        const response = await api.put(`/cuidador/${idCuidador}`, dados);
        return response.data;
    } catch (error) {
        console.error('Erro na atualização do Cuidador:', error);
        if (error.response) {
            // O servidor retornou uma resposta com um status diferente de 2xx
            console.error('Status do erro:', error.response.status);
            console.error('Dados do erro:', error.response.data);
        } else if (error.request) {
            // A requisição foi feita, mas não recebeu uma resposta
            console.error('Erro na requisição, sem resposta do servidor');
        } else {
            // Algo aconteceu durante a configuração da requisição que desencadeou um erro
            console.error('Erro ao configurar a requisição:', error.message);
        }
        throw error; // Você pode ou não querer lançar o erro novamente para o código que chamou essa função.
    }
    
}