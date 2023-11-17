import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './relatorio-screen.css'

//COMPONENTES
import CreateRelatorioModal from '../../../components/modal-create-relatorio/CreateRelatorioModal';
import Menu from '../../../components/menu/menu';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CardRelatorio from '../../../components/card-relatorio/CardRelatorio';
import RelatorioDrawer from '../../../components/drawer-relatorio/DrawerRelatorio';

//API
import { getRelatorioByIDCuidador } from '../../../services/api';
import { useEffect } from 'react';


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
    console.log('====================================');
    console.log(relatorio);
    console.log('====================================');
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
                        <p>Carregando...</p>
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
                            <p>Nenhum relatório encontrado.</p>
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
            />
        </div>
    );
}

export default Relatorios;