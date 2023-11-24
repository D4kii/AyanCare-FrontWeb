import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin, Tooltip } from 'antd';
import './loading-page.css'

function Loading({size}) {
    return (
        <div className="loading-page">
            <div className="loading-page">
                <Tooltip title="Carregando...">
                    <Spin
                        tip="Carregando"
                        indicator={
                            <LoadingOutlined
                                style={{
                                    fontSize: size? size : '5rem',
                                    color: '#35225F'
                                }}
                                spin
                            />

                        }
                    />
                </Tooltip>
            </div>
        </div>
    );
}

export default Loading;



