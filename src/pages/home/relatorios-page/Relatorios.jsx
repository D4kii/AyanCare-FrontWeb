import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './relatorio-screen.css'

//COMPONENTES
import CreateRelatorioModal from '../../../components/modal-create-relatorio/CreateRelatorioModal';
import Menu from '../../../components/menu/menu';
import { Empty, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CardRelatorio from '../../../components/card-relatorio/CardRelatorio';
import RelatorioDrawer from '../../../components/drawer-relatorio/DrawerRelatorio';
import notFoundImage from '../../../images/not-found.svg'

//API
import { getRelatorioByIDCuidador } from '../../../services/api';
import { useEffect } from 'react';
import NotFoundMessage from '../../../components/not-found/NotFound';
import Loading from '../../../components/loading/Loading';


// //Pegando o json do cuidador e o token como string do localStorage
const cuidadorLocalStorage = localStorage.getItem('cuidador')



const Relatorios = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [dadosRelatorio, setDadosRelatorio] = useState({});


    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
        setOpenModal(true);
    };
    const handleCancel = () => {
        setOpenModal(false);
    };

    const viewRelatorio = (e) => {
        setDadosRelatorio(e)
        setOpenDrawer(true);
    }

    const [relatorio, setRelatorio] = useState();
    const [loading, setLoading] = useState(true);
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRelatorioByIDCuidador(idCuidador);
                setRelatorio(data.relatorio);
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


    return (
        <div>
            <div>
                <Menu />
            </div>

            <div className="relatorio-screen">

                <div className='relatorio-screen_header'>

                    <h1 className="relatorio-screen_header-title">Relatórios</h1>
                    <div className="relatorio-screen_header-search-create">
                        <Input type="search"
                            placeholder="Pesquisar"
                            style={{
                                width: '40vw',
                                height: '3rem',
                                maxWidth: '800px',
                                fontFamily: 'manrope',
                                fontSize: '1rem',
                                color: '#7E6F94',
                                fontWeight: 400
                            }}
                            prefix={<SearchOutlined style={{
                                fontSize: '1.1rem',
                                color: '#7E6F94'
                            }} />}
                        />
                        <button className="btn-criar" onClick={showModal}>+ Criar</button>
                    </div>

                </div>

                <div className="column">
                    {loading ? (
                        <Loading/>
                    ) : (
                        relatorio && relatorio.length > 0 ? (
                            relatorio.map((relatorioItem) => (
                                <CardRelatorio
                                    onClick={() => viewRelatorio(relatorioItem)}
                                    key={relatorioItem.id}
                                    textoRelatorio={`Paciente: ${relatorioItem.paciente.nome}`}
                                    dataRelatorio={relatorioItem.data}
                                    horarioRelatorio={relatorioItem.horario}
                                />
                            ))
                        ) : (
                            <NotFoundMessage 
                            title={'Sem relatórios por aqui'}
                            description={'Você ainda não realizou nenhum relatório :(. Clicando em "Criar" você será encaminhado faze-lo se tiver conexão com algum paciente. Se não tiver conexões, se vincule clicando em "Conectar"!'}
                            />
                        )
                    )}
                </div>
                <CreateRelatorioModal
                    open={openModal}
                    onCancel={handleCancel}
                    setOpenModal={setOpenModal}
                />
            </div>
            <RelatorioDrawer
                dadosRelatorio={dadosRelatorio}
                open={openDrawer}
                setOpen={setOpenDrawer}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    );
}

export default Relatorios;