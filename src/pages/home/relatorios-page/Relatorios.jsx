import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import './relatorio-screen.css'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CardRelatorio from '../../../components/card-relatorio/CardRelatorio';

const Relatorios = () => {
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
                        <button className="btn-criar">+ Criar</button>
                    </div>

                </div>

                <div className="column">
                <CardRelatorio/>

                </div>
            </div>
        </div>
    );
}

export default Relatorios;