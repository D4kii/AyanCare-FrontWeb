import React, { useContext, useEffect, useState } from 'react';

//APIS
import { getCuidador } from "../../services/api.js";

//Componentes
import { MinusCircleOutlined, QuestionCircleOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Modal, Menu, Space, Popconfirm } from 'antd';
import CuidadorProfile from '../cuidador-profile/CuidadorProfile.jsx';
import ContasVinculadasScreen from '../contas-vinculadas/ContasVinculadas.jsx';
import './modal-settings.css'

import { AuthContext } from '../../contexts/auth';
import ContasDesvinculadasScreen from '../contas-desvinculadas/ContasDesvinculadas.jsx';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [

  getItem('Conta', 'g1', null, [
    getItem('Perfil', '1', <UserOutlined />),
    getItem('Contas vinculadas', '2', <UsergroupAddOutlined />)
  ], 'group'),
  getItem('Mais', 'g2', null, [
    getItem('Contas Desvinculadas', '3', <MinusCircleOutlined />),
    getItem('Ajuda', '4', <QuestionCircleOutlined />)
  ], 'group'),
]


//Pegando o json do cuidador e o token como string do localStorage
const cuidadorLocalStorage = localStorage.getItem('cuidador')
const token = localStorage.getItem('token')

// Verifica se cuidadorLocalStorage não é nulo antes de tentar analisá-lo
const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

let response = null;
// Certifique-se de que idCuidador não seja nulo antes de usar em outros lugares do código
if (idCuidador) {
  // Agora você pode usar idCuidador em outras partes do código
  // Certifique-se de que o cuidador existe no localStorage antes de fazer a solicitação
  response = await getCuidador(token, idCuidador);
} else {
  // Lida com o caso em que o cuidador não está presente no localStorage
  console.error("Cuidador não encontrado no localStorage.");
}



const ModalSetting = ({ open, onCancel }) => {
  const [imagem, setImagem] = useState(null);


  const [menuClick, setMenuClick] = useState('1')

  const onClick = (e) => {
    console.log(menuClick);
    setMenuClick(e.key)
  };

  const text = 'Tem certeza que deseja sair da sua conta?';
  const description = 'Sair da conta';
  const buttonWidth = 80;

  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
  }

  console.log(imagem);


  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              padding: 0,
            },
            Menu: {
              selectedKeysColor: '#C7BEDB', // Cor de fundo dos botões selecionados
              hoverColor: '#E9E6F0', // Cor de fundo ao passar o mouse
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
          <div
            className='Setting-modal'>
            <div className="modal-setting_menu-lateral">
              <h3 className="modal-setting_title">Configurações</h3>

              <ConfigProvider
                theme={{
                  token: {
                    selectedKeysColor: '#C7BEDB', // Cor de fundo dos botões selecionados
                    hoverColor: '#E9E6F0', // Cor de fundo ao passar o mouse
                  }
                }}>

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
                title={text}
                description={description}
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
              {menuClick == 1 ?
                (
                  <CuidadorProfile
                    nameProfile={response.cuidador.nome}
                    profileDescription={response.cuidador.descricao_experiencia}
                    profilePicture={response.cuidador.foto}
                    imageUseState={imagem}
                    setImagemUseState={setImagem}
                  />
                )
                : menuClick == 2 ?
                  (
                    <ContasVinculadasScreen />
                  )
                  : menuClick == 3 ?
                    (
                      <ContasDesvinculadasScreen/>
                      )
                    :
                    (console.log('foi', menuClick))
              }
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div >
  );
};
export default ModalSetting;