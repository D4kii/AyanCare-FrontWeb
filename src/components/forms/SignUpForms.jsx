import React from "react";
import ProfilePicture from "../profile-picture/ProfilePicture.jsx";
import './forms.css';
import TitleAndSubtitle from "../title-and-subtitle/TitleAndSubtile.jsx";
import LinkCadastroLogin from "../link-cadastro-login/LinkCadastroLogin.jsx";
import { Form, Input, DatePicker, Select } from "antd";
import SubmitButton from "../button/SubmitButton.jsx";


const onFinish = (fieldsValue) => {
    const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
    };
    console.log('Received values of form: ', values);
};

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Por favor, selecione uma data!',
        },
    ],
};

function SignUpForms({
    handleSubmitFunction,

    setStateNameParameter,
    setStateBirthParameter,
    setStateEmailParameter,
    setStatePasswordParameter,
    setStateIdGeneroParameter,
    setStateExperienceDescriptionParameter,

    nomeUseState,
    birthUseState,
    emailUseState,
    passwordUseState,
    idGeneroUseState,
    descricaoExperienciaState
}) {
    const [form] = Form.useForm();

    const { Option } = Select;

    //use state

    const setStateName = setStateNameParameter;
    const setStateBirth = setStateBirthParameter;
    const setStateEmail = setStateEmailParameter;
    const setStatePassword = setStatePasswordParameter;
    const setStateIdGenero = setStateIdGeneroParameter;
    const setStateExperienceDescription = setStateExperienceDescriptionParameter;

    const nome = nomeUseState;
    const birth = birthUseState;
    const email = emailUseState;
    const password = passwordUseState;
    const idGenero = idGeneroUseState;
    const experienceDescription = descricaoExperienciaState;
    ;

    //Variáveis voltadas para a estilização e aos dados de dentro das tags
    const widthForSmallInputs = '20vw';
    const widthForBiggestInputs = '41vw';
    const maxWidthForBiggestInputs = '600px';
    const heightForTextArea = '21vh';
    const heightForInputs = '3.2rem';

    const nameUser = 'Nome'
    const lastNameUser = 'Sobrenome'

    const bithUser = 'Data de Nascimento'
    const genderUser = 'Gênero'

    const typeEmail = 'email'
    const typeText = 'text'
    const typeSelect = 'Select'

    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'

    return (
        <Form className="forms"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            layout="vertical"
            style={{
                fontWeight: 500,
                fontSize: '.9rem',
                fontFamily: 'Poppins'
            }}
            scrollToFirstError>
            <div className="forms-title">

                <TitleAndSubtitle
                    title={'Cadastre-se'}
                    subtitle={'Bem-vindo a tela de cadastro! Insira seu e-mail e senha para seguirmos na próxima etapa.'}
                />
            </div>
            <div className='form_inputs-field'>
                <ProfilePicture></ProfilePicture>

                <div className="form_name-user">
                    <Form.Item
                        name="nome"
                        label="Primeiro e último Nome"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira seu nome!',
                                whitespace: true,
                            },
                        ]}>
                        
                        <Input
                            name={nameUser}
                            type={typeText}
                            id="nomeCadastro"
                            value={nome}
                            onChange={setStateName}

                            style={{
                                width: widthForBiggestInputs,
                                height: heightForInputs,
                                maxWidth: maxWidthForBiggestInputs
                            }}
                        />
                    </Form.Item>

                </div>
                <div className="form_gender-and-birth-user">

                    <Form.Item
                        name="date-picker"
                        label={bithUser}
                        {...config}
                        style={{
                            wordWrap: 'none'
                        }}
                    >
                        <DatePicker
                            id="nascimentoCadastro"
                            value={birth}
                            onChange={setStateBirth}

                            style={{
                                width: widthForSmallInputs,
                                maxWidth: '300px',
                                height: heightForInputs
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label={genderUser}
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, selecione um gênero!',
                            },
                        ]}
                    >
                        <Select placeholder="selecione seu gênero"
                            id="generoCadastro"
                            value={idGenero}
                            onChange={setStateIdGenero}
                            style={{
                                width: widthForSmallInputs,
                                height: heightForInputs
                            }}
                        >
                            <Option value="homem">Homem</Option>
                            <Option value="mulher">Mulher</Option>
                            <Option value="outro">Outro</Option>
                        </Select>
                    </Form.Item>

                </div>

                <div className="form_user-experience">
                    <Form.Item
                        name="description"
                        label="Descrição  de experiência(opcional):"
                        rules={[
                            {
                                max: 300,
                                message: 'Please input Intro',
                            },
                        ]}
                    >
                        <Input.TextArea
                            showCount maxLength={300}
                            value={descricaoExperienciaState}
                            onChange={setStateExperienceDescription}
                            style={{
                                width: widthForBiggestInputs,
                                height: heightForTextArea,
                                maxHeight: heightForTextArea,
                                maxWidth: maxWidthForBiggestInputs
                            }}
                        />
                    </Form.Item>

                </div>

                <Form.Item
                    name="email"
                    label={fieldEmail}
                    rules={[
                        {
                            type: 'email',
                            message: 'O valor inserido não é um E-mail valido!',
                        },
                        {
                            required: true,
                            message: 'Por favor, insira seu E-mail!',
                        },
                    ]}
                >
                    <Input
                        type={typeEmail}
                        id="emailCadastro"
                        value={email}
                        onChange={setStateEmail}
                        style={{
                            width: widthForBiggestInputs,
                            maxWidth: maxWidthForBiggestInputs,
                            height: heightForInputs
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={fieldSenha}
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, insira sua senha!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        id="senhaCadastro"
                        value={password}
                        onChange={setStatePassword}
                        style={{
                            width: widthForBiggestInputs,
                            maxWidth: maxWidthForBiggestInputs,
                            height: heightForInputs
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label={fieldConfirmationSenha}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, confirme sua senha!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('As senhas não são iguais!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        id="confirmacaoSenhaCadastro"
                        style={{
                            width: widthForBiggestInputs,
                            maxWidth: maxWidthForBiggestInputs,
                            height: heightForInputs
                        }} />
                </Form.Item>
            </div>
            <SubmitButton form={form} nameButton={'Próximo'} />

            <LinkCadastroLogin caminho={'cadastro'} />
        </Form>

    )
}

export default SignUpForms;