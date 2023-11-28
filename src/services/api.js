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

export const createEventoSemanal = async (dados) => {
    console.log(2, { dados });

    try {
        const response = await api.post(`/evento/semanal`, dados);
        return response.data;
    } catch (error) {
        console.error('Erro na em criar evento semanal:', error);
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
export const getConexaoByIDCuidadorAndPacienteName = async (id_cuidador, paciente_name) => {

    try {
        const response = await api.get(`/conexoes`, {
            params: {
                "idCuidador": id_cuidador,
                "nomePaciente": paciente_name
            }
        });
        console.log(77, response.data);
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de conexao entre cuidador e paciente:', error);
        throw error;
    }

}

export const getCores = async () => {

    try {
        const response = await api.get(`/cores`);
        console.log(2, response.data);
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de cores:', error);
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

export const getNotificacoesByIdCuidador = async (id_cuidador) => {

    try {
        const response = await api.get(`/notificacao/modificacoes/${id_cuidador}`);
        console.log('444444====================================');
        console.log(response.data);
        console.log('====================================');
        return response.data;
    } catch (error) {
        console.error('Erro na solicitação GET de notificações:', error);
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
export const getTurnosByIDCuidador = async (id_cuidador) => {
    try {
        const response = await api.get(`/turnos`, {
            params: {
                idCuidador: id_cuidador
            }
        });
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de turnos:', error);
        throw error;
    }
}

export const getContasDesativadasIDCuidador = async (id_cuidador) => {
    try {
        const response = await api.get(`/conexoes/inativas`, {
            params: {
                idCuidador: id_cuidador
            }
        });
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de contas inativas:', error);
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

export const getEventosSemanaisByID = async (id_evento_semanal) => {
    try {
        const response = await api.get(`/evento/semanal/${id_evento_semanal}`);
        console.log('getEventosAlarmesByCuidadorAndMes====================================');
        console.log(response.data);
        console.log('====================================');
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de evento semanal:', error);
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

export const getEventosAlarmesByCuidadorAndMes = async (id_cuidador, mes, id_paciente) => {
    try {
        const response = await api.get(`/calendario`, {
            params: {
                idPaciente: id_paciente,
                mes: mes,
                idCuidador: id_cuidador
            }
        });
        console.log('getEventosAlarmesByCuidadorAndMes====================================');
        console.log({ id_cuidador, mes, id_paciente });
        console.log('====================================');
        return response.data

    } catch (error) {
        console.error('Erro na solicitação GET de calendario:', error);
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

export const getEventosAlarmesByCuidadorAndDate = async (id_cuidador, dia, id_paciente, dia_semana) => {
    try {
        const response = await api.get(`/calendario`, {
            params: {
                idPaciente: id_paciente,
                dia: dia,
                idCuidador: id_cuidador,
                diaSemana: dia_semana,
            }
        });
        console.log('getEventosAlarmesByCuidadorAndDate====================================');
        console.log({ id_cuidador, dia, id_paciente, dia_semana });
        console.log('====================================');
        return response.data

    } catch (error) {
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

export const ativarContasDesvinculadas = async (idCuidador, idPaciente) => {
    try {
        const response = await api.put(`/conexao/ativar?idPaciente=${idPaciente}&idCuidador=${idCuidador}`);
        return response.data;
    } catch (error) {
        console.error('Erro na reconexão entre contas do Cuidador:', error);
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

export const desativarContasVinculadas = async (idCuidador, idPaciente) => {
    console.log({idCuidador, idPaciente});
    try {
        const response = await api.put(`/conexao/desativar?idPaciente=${idPaciente}&idCuidador=${idCuidador}`);
        return response.data;
    } catch (error) {
        console.error('Erro na tentativa de desativar contas do Cuidador:', error);
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