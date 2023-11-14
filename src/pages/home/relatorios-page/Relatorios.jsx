import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './relatorio-screen.css'

//COMPONENTES
import CreateRelatorioModal from '../../../components/modal-create-relatorio/CreateRelatorioModal';
import Menu from '../../../components/menu/menu';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CardRelatorio from '../../../components/card-relatorio/CardRelatorio';

//API
import { getRelatorioByIDCuidador } from '../../../services/api';
import { useEffect } from 'react';


// //Pegando o json do cuidador e o token como string do localStorage
const cuidadorLocalStorage = localStorage.getItem('cuidador')

// // Verifica se cuidadorLocalStorage não é nulo antes de tentar analisá-lo
// const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
// const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

// let response = null;
// // Certifique-se de que idCuidador não seja nulo antes de usar em outros lugares do código
// if (idCuidador) {
//   // Agora você pode usar idCuidador em outras partes do código
//   // Certifique-se de que o cuidador existe no localStorage antes de fazer a solicitação
//   response = await getRelatorioByIDCuidador( idCuidador);
// } else {
//   // Lida com o caso em que o cuidador não está presente no localStorage
//   console.error("Cuidador não encontrado no localStorage.");
// }


const Relatorios = () => {

    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
        setOpenModal(true);
    };
    const handleCancel = () => {
        setOpenModal(false);
    };

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
                        relatorio.map((relatorio, index) => (
                            <CardRelatorio
                                key={index}
                                textoRelatorio={`Paciente: ${relatorio.paciente.nome}`}
                                dataRelatorio={relatorio.data}
                                horarioRelatorio={relatorio.horario}
                            />
                        ))
                    )}

                </div>
                <CreateRelatorioModal
                    open={openModal}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
}

export default Relatorios;