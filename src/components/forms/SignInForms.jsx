import React, { useState } from "react";
import CheckboxField from '../checkbox/checkbox.jsx';
import ForgotPassword from "../forgot-password/forgotPassword.jsx";
import './forms.css';
import { Button, Form, Input, Space, Checkbox } from 'antd';
import SubmitButton from "../button/SubmitButton.jsx";



function SignInForms({
    handleSubmitFunction,
    setStatePasswordParameter,
    setStateEmailParameter,
    emailUseState,
    passwordUseState
}) {
    const [form] = Form.useForm();

    const widthForBiggestInputs = '41vw'
    const heightForInputs = '3.2rem'
    const fontSizeLabel = '.9rem'

    const fieldSenha = 'Senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    const setStateEmail = setStateEmailParameter;
    const setStatePassword = setStatePasswordParameter;

    const email = emailUseState;
    const password = passwordUseState;

    const handleSubmit = handleSubmitFunction;


    return (
        <Form className="forms" onSubmitCapture={handleSubmit} form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <div>
                <Form.Item
                    name="email"
                    label={fieldEmail}
                    validateTrigger="onBlur"
                    rules={[
                        {
                          type: 'email',
                          message: 'Valor inválido!',
                        },
                        {
                            required: true,
                            message: "Por favor, insira seu E-mail",
                            max: 255
                        }
                    ]}
                    style={{
                        fontWeight: 500,
                        fontSize: fontSizeLabel,

                    }}
                    hasFeedback
                >


                    <Input
                        placeholder="Ex: seuEmail@gmail.com"
                        type="email"
                        id="emailLogin"
                        value={email}
                        onChange={setStateEmail}
                        style={{
                            height: heightForInputs,
                            width: widthForBiggestInputs
                        }}
                    />

                </Form.Item>

                <Form.Item
                    label={fieldSenha}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Por favor, insira sua senha"
                        },
                    ]}
                    style={{
                        fontWeight: 500,
                        fontSize: fontSizeLabel,

                    }}
                >
                    <Input.Password
                        id="senhaLogin"
                        value={password}
                        width={widthForBiggestInputs}
                        onChange={setStatePassword}
                        style={{
                            height: heightForInputs
                        }}
                    />

                </Form.Item>
            </div>
            <div className="forms-check-field">
            <Checkbox title={checkboxText}></Checkbox>
                <CheckboxField checkBoxName={checkboxText} />
                <ForgotPassword />
            </div>
            <Form.Item>
                <Space>
                    <SubmitButton nameButton={'Entrar'} form={form}/>
                </Space>
            </Form.Item>
        </Form>

    )
}

export default SignInForms;