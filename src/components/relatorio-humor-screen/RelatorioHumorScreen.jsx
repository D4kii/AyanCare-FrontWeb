import React, { useEffect, useState } from "react";
import { Avatar, Form, List, Select } from 'antd';
import './relatorio-humor.css'
import { getPacientesByIDCuidador } from "../../services/api";
import Loading from "../loading/Loading";


const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
//Pegar o usuario para fazer a verificação se ele existe 
const cuidadorLocalStorage = localStorage.getItem('cuidador')

function RelatorioHumorScreen() {
    const [paciente, setPaciente] = useState("");
    const [loading, setLoading] = useState(true);
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);

                // const dataCreateRelatorio = await createRelatorio();

                setPaciente(dataPacientesByCuidador);
                setPergunta(dataPerguntasQuestionario)
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
        };

        if (idCuidador) {
            fetchData();
        }
    }, [idCuidador]);


    const handleChange = (selectedOption) => {
        const { value } = selectedOption;
        console.log(`selected ${value}`);
    };


    return (
        <div>
            <h2 className="relatorio-humor_screen-title">
                Relatórios de humor
            </h2>


            <Select
                defaultValue=""
                style={{ width: 200 }}
                onChange={handleChange}
                labelInValue="Paciente"
            >
                {loading ? (
                    <Loading />
                ) : (
                    paciente.conexao.map(conexao => (
                        <Option key={conexao.id_paciente} value={conexao.id_paciente}>
                            {conexao.paciente}
                        </Option>
                    ))
                )}
            </Select>


            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default RelatorioHumorScreen;