import React, { useEffect, useState } from "react";
import logo from '../../images/logo.svg';
import './menu.css';
import iconHome from '../../images/home-icon.png';
import iconCalendario from '../../images/agenda-icon.png';
import iconRelatorio from '../../images/relatorio-icon.png';
import iconPaciente from '../../images/paciente-icon.png';
import iconSino from '../../images/sino-icon.png';
import iconConfig from '../../images/config-icon.png';
import ModalSetting from "../modal-configuracoes/ModalSettings";
import { Button, Empty, Popover, Space, notification } from 'antd';
import PopoverCardNotifications from "../popover-notifications/PopoverNotifications";
import { useLocation } from "react-router-dom";
import ModalConectar from "../conectar-modal/ModalConectar";
import { getNotificacoesByIdCuidador } from "../../services/api";
import Loading from "../loading/Loading";

function Menu() {
    const location = useLocation();
    const [openModalSetting, setOpenModalSetting] = useState(false);
    const [openModalConexao, setOpenModalConexao] = useState(false);
    const [loading, setLoading] = useState(true);
    const [notificacoes, setNotificacoes] = useState([]);

    const fetchNotificacoes = async () => {
        try {
            const cuidadorLocalStorage = localStorage.getItem('cuidador');
            const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
            const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;
            const dadosNotificacoes = await getNotificacoesByIdCuidador(idCuidador);
            setNotificacoes(dadosNotificacoes);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar dados de notificações:', error);
            // Lidar com erros, se necessário
        }
    };

    useEffect(() => {
        setLoading(true);
        const initialNotificacoes = fetchNotificacoes();

        // Atualiza notificações a cada 30s
        const intervalId = setInterval(() => {
            const newNotificacoes = fetchNotificacoes();
            if (newNotificacoes.length > initialNotificacoes.length) {
                const novaNotificacao = newNotificacoes[newNotificacoes.length - 1];
                openNotification('topRight', novaNotificacao);
            }
        }, 60 * 1000);

        return () => {
            clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
        };
    }, []); // O array vazio garante que o useEffect seja executado apenas uma vez

    const openNotification = (placement, novaNotificacao) => {
        notification.info({
            message: `Nova Notificação`,
            description: novaNotificacao.descricao,
            placement,
        });
    };

    const showModalSetting = () => {
        setOpenModalSetting(true);
    };

    const handleCancelSetting = () => {
        setOpenModalSetting(false);
    };

    const showModalConexao = () => {
        setOpenModalConexao(true);
    };

    const handleCancelConexao = () => {
        setOpenModalConexao(false);
    };


    return (
        <div className="menu-lateral-field">

            <div className="menu-lateral">
                <div className="menu-lateral_menu-begin" onClick={showModalConexao}>

                    <img src={logo} alt="Logo AyanCare" />
                    <a className="btn-conectar">+ Conectar</a>
                </div>

                <div className="navigation-icon">
                    <a className="home-icon-link" href="/home"
                        style={{
                            background: location.pathname == '/home' ? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}
                    >
                        <img className="home-icon" src={iconHome} alt=""
                            style={{
                                filter: location.pathname == '/home' ? 'invert(100%)' : 'none'
                            }} />
                    </a>
                    <a className="agenda-icon-link" href="/agenda"
                        style={{
                            background: location.pathname == '/agenda' ? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}
                    >
                        <img className="agenda-icon" src={iconCalendario} alt=""
                            style={{
                                filter: location.pathname == '/agenda' ? 'invert(100%)' : 'none'
                            }} />
                    </a>
                    <a className="relatorios-icon-link" href="/relatorios"
                        style={{
                            background: location.pathname == '/relatorios' ? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}>
                        <img className="relatorios-icon" src={iconRelatorio} alt=""
                            style={{
                                filter: location.pathname == '/relatorios' ? 'invert(100%)' : 'none'
                            }} />
                    </a>
                    <a className="pacientes-icon-link" href="/pacientes"
                        style={{
                            background: location.pathname == '/pacientes' ? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}>
                        <img className="pacientes-icon" src={iconPaciente} alt=""
                            style={{
                                filter: location.pathname == '/pacientes' ? 'invert(100%)' : 'none'
                            }} />
                    </a>
                </div>
                <div className="configuration-icons">
                    <Space wrap>
                        <Popover placement="rightTop"
                            title={"Notificações"}

                            content={(
                                <>
                                    {loading ? (
                                        <Loading size={'2rem'} />
                                    ) : (

                                        <div className="notification-field">
                                            {notificacoes.notificacao?
                                            notificacoes.notificacao.map((notificacao) => (
                                                <PopoverCardNotifications
                                                    key={notificacao.id}
                                                    title={notificacao.nome}
                                                    description={notificacao.descricao}
                                                    time={notificacao.hora_criacao}
                                                />
                                            ))
                                            :
                                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Sem notificações'}/>
                                        }
                                        </div>
                                    )}
                                </>
                            )} trigger="click">
                            <Button className="btn-icons">
                                <img className="icons-notification" src={iconSino} alt="" />
                            </Button>
                        </Popover>
                    </Space>

                    <a className="btn-icons" onClick={showModalSetting}>
                        <img className="icons-notification" src={iconConfig} alt="" />
                    </a>
                </div>
            </div>
            <ModalSetting open={openModalSetting} onCancel={handleCancelSetting} />
            <ModalConectar onCancel={handleCancelConexao} onOpen={openModalConexao} />
        </div>
    );
}

export default Menu;
