import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import './loading-page.css'

function Loading() {
    return (
        <div className="loading-page">
            <div className="loading-page">
            <Spin
            tip="Carregando"
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: '5rem',
                            color: '#35225F'
                        }}
                        spin
                    />
                }
            />
        </div>
        </div>
    );
}

export default Loading;



