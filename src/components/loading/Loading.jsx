import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import './loading-page.css'

function Loading() {
    return (
        <div className="loading-page">
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >

                <Spin tip="Loading" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        </div>
    );
}

export default Loading;



