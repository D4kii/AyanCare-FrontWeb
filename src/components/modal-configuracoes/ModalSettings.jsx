import React, { useContext, useEffect, useState } from 'react';
import { getCuidador } from "../../services/api.js";
import { MinusCircleOutlined, QuestionCircleOutlined, SmileOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Modal, Menu, Space, Popconfirm } from 'antd';
import CuidadorProfile from '../cuidador-profile/CuidadorProfile.jsx';
import ContasVinculadasScreen from '../contas-vinculadas/ContasVinculadas.jsx';
import './modal-settings.css'
import { AuthContext } from '../../contexts/auth';
import ContasDesvinculadasScreen from '../contas-desvinculadas/ContasDesvinculadas.jsx';
import RelatorioHumorScreen from '../relatorio-humor-screen/RelatorioHumorScreen.jsx';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

//Parte do componente menu
const items = [
  getItem('Conta', 'g1', null, [
    getItem('Perfil', '1', <UserOutlined />),
    getItem('Contas vinculadas', '2', <UsergroupAddOutlined />)
  ], 'group'),
  getItem('Mais', 'g2', null, [
    getItem('Contas Desvinculadas', '3', <MinusCircleOutlined />),
    getItem('Relatório de humor', '4', <SmileOutlined />),
    getItem('Ajuda', '5', <QuestionCircleOutlined />)
  ], 'group'),
];

const ModalSetting = ({ open, onCancel }) => {
  const [imagem, setImagem] = useState(null);
  const [menuClick, setMenuClick] = useState('1');
  const { authenticated, logout } = useContext(AuthContext);
  const [cuidador, setCuidador] = useState(null);

  const onClick = (e) => {
    console.log(menuClick);
    setMenuClick(e.key);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cuidadorLocalStorage = localStorage.getItem('cuidador');
        const token = localStorage.getItem('token');
        const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
        const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

        if (idCuidador) {
          const response = await getCuidador(token, idCuidador);
          setCuidador(response.cuidador);
        } else {
          console.error("Cuidador não encontrado no localStorage.");
        }
      } catch (error) {
        console.error("Erro ao obter dados do cuidador:", error);
      }
    };

    fetchData();
  }, [logout]);

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              padding: 0,
            },
            Menu: {
              selectedKeysColor: '#C7BEDB',
              hoverColor: '#E9E6F0',
            }
          }
        }}
      >
        <Modal
          open={open}
          onCancel={onCancel}
          footer={null}
          width={'80vw'}
          style={{
            borderRadius: '12px',
            height: '70vh',
            width: '80vw',
            padding: 0
          }}
        >
          <div className='Setting-modal Modal'>
            <div className="modal-setting_menu-lateral">
              <h3 className="modal-setting_title">Configurações</h3>
              <ConfigProvider
                theme={{
                  token: {
                    selectedKeysColor: '#C7BEDB',
                    hoverColor: '#E9E6F0',
                  }
                }}
              >
                <Menu
                  style={{
                    background: 'transparent',
                    height: '60vh'
                  }}
                  className='modal-setting_buttons-pagination'
                  onClick={onClick}
                  selectedKeys={[menuClick]}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  items={items}
                />
              </ConfigProvider>
              <Popconfirm
                placement="topLeft"
                title="Sair"
                description="Tem certeza que deseja sair da sua conta?"
                okText="Sim"
                cancelText="Não"
                onConfirm={handleLogout}
              >
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#979C9E',
                    cursor: 'pointer',
                    padding: '8px 16px'
                  }}
                >
                  Sair
                </button>
              </Popconfirm>
            </div>
            <div className="modal-setting_page">
              {menuClick === '1' ? (
                <CuidadorProfile
                  nameProfile={cuidador ? cuidador.nome : ''}
                  profileDescription={cuidador ? cuidador.descricao_experiencia : ''}
                  imageUseState={cuidador ? cuidador.foto : null}
                  idCuidador={cuidador ? cuidador.id : null}
                  setImagemUseState={setImagem}
                />
              ) : menuClick === '2' ? (
                <ContasVinculadasScreen />
              ) : menuClick === '3' ? (
                <ContasDesvinculadasScreen />
              ) : menuClick === '4' ? (
                <RelatorioHumorScreen />
              ) : (
                console.log('foi', menuClick)
              )}
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ModalSetting;
