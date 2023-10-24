import React, { useState } from "react";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/Checkbox.jsx';
import ForgotPassword from "../forgot-password/ForgotPassword.jsx";
import Buttonn from "../button/button.jsx";
import './forms.css';
import { Button, Form, Input, Space } from 'antd';
import SubmitButton from "../button/SubmitButton.jsx";


// const SubmitButton = ({ form, nameButton }) => {
//     const [submittable, setSubmittable] = useState(false);

//     // Watch all values
//     const values = Form.useWatch([], form);
//     React.useEffect(() => {
//         form
//             .validateFields({
//                 validateOnly: true,
//             })
//             .then(
//                 () => {
//                     setSubmittable(true);
//                 },
//                 () => {
//                     setSubmittable(false);
//                 },
//             );
//     }, [values]);
//     return (
//         <Button
//             type="primary"
//             htmlType="submit"
//             disabled={!submittable}

//             style={{
//                 width: '180px',
//                 height:'57px',
//                 background: '#35225F',
//                 color: '#FFF',
//                 fontFamily: 'Poppins'
//             }}
//         >
//             Submit
//         </Button>
//     );
// };


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
        <Form className="forms" onSubmit={handleSubmit} form={form} name="validateOnly" layout="vertical" autoComplete="off">
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
                <CheckboxField checkBoxName={checkboxText} />
                <ForgotPassword />
            </div>
            <Form.Item>
                <Space>
                    <SubmitButton nameButton={'Entrar'} form={form}>

                    </SubmitButton>

                </Space>
            </Form.Item>
        </Form>

    )
}

export default SignInForms;