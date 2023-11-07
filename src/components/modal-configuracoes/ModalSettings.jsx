import React, { useContext, useState } from 'react';

//Componentes
import { MinusCircleOutlined, QuestionCircleOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Modal, Menu, Space } from 'antd';
import CuidadorProfile from '../cuidador-profile/CuidadorProfile.jsx';
import './modal-settings.css'

import { AuthContext } from '../../contexts/auth';
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

const ModalSetting = ({ open, onCancel }) => {
  const [menuClick, setMenuClick ] = useState(1)

  const onClick = (e) => {
    console.log(menuClick);
    setMenuClick(e.key)
  };

  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
  }


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
              <button
                onClick={handleLogout}
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


            </div>
            <div className="modal-setting_page">
                {menuClick==1? 
                <CuidadorProfile/>
                
                : menuClick===2?
                <h2>{menuClick}</h2>
                : menuClick ==3?
                console.log('foi', menuClick)
                :
                console.log('foi', menuClick)
                }
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div >
  );
};
export default ModalSetting;