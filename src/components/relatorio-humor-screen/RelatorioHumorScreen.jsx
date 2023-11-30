import React, { useEffect, useState } from "react";
import { Avatar, Card, Descriptions, Divider, Empty, Form, Input, List, Select, Skeleton, Space, Tag } from 'antd';
import { getPacientesByIDCuidador, getRelatorioHumorbyIdPaciente, getTesteHumorByID } from "../../services/api";
import Loading from "../loading/Loading";
import './relatorio-humor-screen.css'
import { LeftOutlined, RobotOutlined, SmileFilled } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
const { Option } = Select;


//Pegar o usuario para fazer a verificação se ele existe 
const cuidadorLocalStorage = localStorage.getItem('cuidador')

function RelatorioHumorScreen() {

    const emptyMessage = {
        emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum Teste feito ainda'} />
    }

    const [paciente, setPaciente] = useState("");
    const [pacienteSelected, setPacienteSelected] = useState(null);

    const [humorData, setHumorData] = useState('');

    const [humorSelected, setHumorSelected] = useState(null);
    const [humorSelectedData, setHumorSelectedData] = useState(null);

    const [loading, setLoading] = useState(true);
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);

                setPaciente(dataPacientesByCuidador);
                // const dataCreateRelatorio = await createRelatorio();

                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
            console.log(111, pacienteSelected);

        };

        if (idCuidador) {
            fetchData();
        }
    }, [idCuidador]);


    const handleChange = async (selectedOption) => {
        const { value } = selectedOption;
        setPacienteSelected(value);

        try {
            const dataRelatorioHumorByPaciente = await getRelatorioHumorbyIdPaciente(value);
            setHumorData(dataRelatorioHumorByPaciente);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar dados do relatório de humor:', error);
            setLoading(false);
        }
    };
    console.log('select', humorData);

    const handleCardClick = async (key) => {
        setHumorSelected(key);

        try {
            const dataRelatorioHumorByID = await getTesteHumorByID(key);
            setHumorSelectedData(dataRelatorioHumorByID);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar dados do relatório de humor:', error);
            setLoading(false);
        }
    };
    const cancelCardClick = async () => {
        setHumorSelected(false);
    };
    console.log('data', humorData.testes);

    return (
        <div>
            {humorSelected ? (
                <div
                >
                    {loading ?
                        (<Loading />)
                        :
                        (
                            <div>
                                {humorSelectedData ? (
                                    <div>
                                        <LeftOutlined
                                            style={{
                                                margin: '1rem'
                                            }}
                                            onClick={cancelCardClick} />
                                        <div className="teste-humor_selecionado">
                                            <div className="teste-humor_selecionado-title">
                                                <h2 className="relatorio-humor_screen-title paciente-name">
                                                    {humorSelectedData.teste.paciente}
                                                </h2>
                                                <Descriptions 
                                                title={null} 
                                                layout="horizontal" 
                                                items={[
                                                    {
                                                        label: 'Data',
                                                        children: humorSelectedData.teste.data
                                                    },
                                                    {
                                                        label: 'Horário',
                                                        children: humorSelectedData.teste.horario
                                                    }
                                                ]} />
                                                <Descriptions 
                                                title={null} 
                                                layout="vertical" 
                                                style={{
                                                    width: '80%',
                                                    height: 'max-content',
                                                    maxHeight: '12rem',
                                                    resize: 'none'
                                                }}
                                                items={[
                                                    {
                                                        label:'Descrição',
                                                        children: humorSelectedData.teste.observacao
                                                    }
                                                ]} />
                                                

                                            </div>
                                            <div className="column-Humor"
                                                style={{
                                                    margin: '1rem'
                                                }}
                                            >
                                                <Divider orientation="left">Humor</Divider>
                                                <Space size={[0, 8]} wrap>
                                                    {
                                                        humorSelectedData.teste.humores.map((item) => (

                                                            <Tag
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}
                                                                key={item.id} icon={
                                                                    <img src={item.icone}
                                                                        style={
                                                                            {
                                                                                height: '19px',
                                                                                width: '19px',
                                                                                filter: 'invert(100%)'
                                                                            }
                                                                        } />

                                                                } color="#C8BEDB">
                                                                {item.nome}
                                                            </Tag>


                                                        ))
                                                    }
                                                </Space>
                                            </div>
                                            <div className="column-exercicios"
                                                style={{
                                                    margin: '1rem'
                                                }}
                                            >
                                                <Divider orientation="left">Exercicios realizados</Divider>
                                                <div className="column-exercicios_area"

                                                >
                                                    <Space size={[20, 0]}
                                                        style={{ width: 'max-content' }}
                                                    >
                                                        {

                                                            // restante do código
                                                            <>
                                                                {humorSelectedData.teste.exercicios && humorSelectedData.teste.exercicios.map((item) => (


                                                                    <Card
                                                                        hoverable
                                                                        style={{
                                                                            width: 160,
                                                                        }}
                                                                        cover={<img alt="example" src={item.icone} style={
                                                                            {
                                                                                height: '100%',
                                                                                width: '100%'
                                                                            }
                                                                        } />}
                                                                    >
                                                                        <Meta
                                                                            title={item.nome} />
                                                                    </Card>


                                                                ))}
                                                            </>
                                                        }
                                                    </Space>

                                                </div>
                                            </div>
                                            <div className="column-sintomas"
                                                style={{
                                                    margin: '1rem'
                                                }}
                                            >
                                                <Divider orientation="left">Sintomas</Divider>
                                                <Space size={[0, 8]} wrap>
                                                    {
                                                        humorSelectedData.teste.sintomas.map((item) => (
                                                            <Tag key={item.id} color="#C8BEDB"
                                                                style={{
                                                                    fontSize: '16px'
                                                                }}
                                                            >
                                                                {item.nome}
                                                            </Tag>
                                                        ))
                                                    }
                                                </Space>
                                            </div>

                                        </div>


                                    </div>) : (
                                    <p>Dados do humor não carregados</p>
                                )}
                            </div>
                        )
                    }

                </div>

            ) : (
                <div>

                    <div className="relatorio-humor_screen">

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
                                <Option key="loading" value="loading">
                                    <Loading />
                                </Option>
                            ) : (
                                paciente.conexao?.map(conexao => (
                                    <Option key={conexao.id_paciente} value={conexao.id_paciente}>
                                        {conexao.paciente}
                                    </Option>
                                ))
                            )}
                        </Select>

                    </div>

                    <div className="relatorio-humor_cards-field">
                        {loading ? (
                            <Loading /> // Exibe um indicador de carregamento enquanto os dados estão sendo carregados
                        ) : humorData ? (
                            <>

                                <List
                                    itemLayout="horizontal"
                                    locale={emptyMessage}
                                    dataSource={humorData.testes}
                                    renderItem={(item) => (
                                        <List.Item
                                            actions={[<a key="list-loadmore-more" 
                                            onClick={() => handleCardClick(item.id_teste_humor)}>ver mais</a>]}
                                            key={item.id_teste_humor}
                                        >
                                            <Skeleton avatar title={item.paciente} loading={item.loading} active>
                                                <List.Item.Meta
                                                    title={<a href="">{item.paciente}</a>}
                                                    description={item.observacao.length > 40 ? `${item.observacao.slice(0, 40)}...` : item.observacao}
                                                />
                                                <div>{item.data}</div>
                                            </Skeleton>
                                        </List.Item>
                                    )}
                                />
                            </>
                        ) : (
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum Paciente selecionado'} />
                        )}
                    </div>

                </div>)}


        </div>
    );
}

export default RelatorioHumorScreen;