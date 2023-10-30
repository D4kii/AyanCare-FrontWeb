import React from "react";
import { Button, Result } from 'antd';
import { Navigate } from "react-router-dom";

function SucessRegisterScreen() {
    return (
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
                <Button type="primary" key="console" onClick={Navigate('/login')}>
                    Fazer Login
                </Button>,
                <Button key="buy">Sair</Button>,
            ]}
        />
    );
}

export default SucessRegisterScreen;