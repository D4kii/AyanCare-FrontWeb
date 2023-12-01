import React from "react";
import ProfilePicture from "../profile-picture/ProfilePicture.jsx";
import './forms.css';
import TitleAndSubtitle from "../title-and-subtitle/TitleAndSubtile.jsx";
import LinkCadastroLogin from "../link-cadastro-login/LinkCadastroLogin.jsx";
import { Form, Input, DatePicker, Select, Alert } from "antd";
import SubmitButton from "../button/SubmitButton.jsx";
import image from '../../images/background-image.png'


function SignUpForms({
    onFinish,
    handleUpload,

    progress,
    setProgress,
    setStateImageParameter,
    setStateNameParameter,
    setStateBirthParameter,
    setStateEmailParameter,
    setStatePasswordParameter,
    setStateIdGeneroParameter,
    setStateExperienceDescriptionParameter,

    imageUseState,
    nomeUseState,
    birthUseState,
    emailUseState,
    passwordUseState,
    idGeneroUseState,
    descricaoExperienciaState
}) {

    const validateAge = (rule, value) => {
        return new Promise((resolve, reject) => {
            if (value) {
                const dob = new Date(value);
                const today = new Date();
                const age = today.getFullYear() - dob.getFullYear();

                if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
                    age; // Ainda não fez aniversário neste ano
                }

                if (age < 16) {
                    reject('Você deve ter pelo menos 16 anos de idade.');
                } else {
                    resolve();
                }
            } else {
                reject('Por favor, insira sua data de nascimento.');
            }
        });
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

    const validatePassword = (rule, value, resolve) => {
        if (value) {
            if (value.length < 8) {
                resolve('A senha deve ter pelo menos 8 caracteres.');
            }

            else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value) || !/\d/.test(value)) {

                resolve('A senha deve conter pelo menos um caractere especial e um número.');
            }

            else {


                resolve();
            }
        } else {
            resolve('Por favor, insira sua senha.');
        }
    };



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
    const maxWidthForSmallInputs = '300px';
    const heightForTextArea = '21vh';
    const heightForInputs = '3.2rem';

    const nameUser = 'Nome'
    const lastNameUser = 'Sobrenome'

    const bithUser = 'Data de Nascimento'
    const genderUser = 'Gênero'
    const idGenderUser = 1

    const typeEmail = 'email'
    const typeText = 'text'
    const typeSelect = 'Select'

    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'

    return (
        <Form
            className="forms"
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
                <Form.Item
                    name="image"
                    label="Foto de Perfil"
                >
                    <ProfilePicture
                        progress={progress}
                        setProgress={setProgress}
                        handleUpload={handleUpload}
                        setImagem={setStateImageParameter}
                        imagem={imageUseState} />
                </Form.Item>

                <div className="form_name-user">
                    <Form.Item
                        name="nome"
                        label="Primeiro e último nome"
                        rules={[
                            {
                                type: "string",
                                min: 3,
                                message: 'Insira um nome válido!'
                            },
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
                            placeholder="Ex: Fernando Silva"
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
                        name="data_nascimento"
                        label={bithUser}
                        {...config}
                        rules={[
                            {
                                validator: validateAge
                            }
                        ]}
                        style={{
                            wordWrap: 'none'
                        }}

                    >
                        <DatePicker
                            format={"DD/MM/YYYY"}
                            id="nascimentoCadastro"
                            value={birth}
                            onChange={setStateBirth}
                            placeholder="Ex: 12/12/1999"
                            style={{
                                width: widthForSmallInputs,
                                maxWidth: maxWidthForSmallInputs,
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
                        <Select 
                        placeholder="Ex: Homem"
                            id="generoCadastro"
                            value={idGenero}
                            onChange={setStateIdGenero}
                            style={{
                                width: widthForSmallInputs,
                                height: heightForInputs,
                                maxWidth: maxWidthForSmallInputs
                            }}
                        >
                            <Option value="1">Homem</Option>
                            <Option value="2">Mulher</Option>
                            <Option value="3">Outro</Option>
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
                            placeholder="ex: Tenho experiência trabalhando com idosos desde..."
                            value={experienceDescription}
                            onChange={setStateExperienceDescription}
                            style={{
                                width: widthForBiggestInputs,
                                height: heightForTextArea,
                                maxHeight: heightForTextArea,
                                maxWidth: maxWidthForBiggestInputs,
                                resize: 'none'
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
                            message: 'O valor inserido não é um E-mail válido!',
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
                        placeholder="Ex: fernando.s@gmail.com"
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
                            validator: validatePassword,

                        }
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
            <Alert
                message="Atenção"
                description="Lembrando que esta aplicação é somente para cuidadores. Se você não é um cuidador, temos uma versão mobile para pacientes!"
                type="info"
                style={{width:400}}
                showIcon
                closable
            />
            <SubmitButton form={form} nameButton={'Próximo'} />

            <LinkCadastroLogin caminho={'cadastro'} />
        </Form>

    )
}

export default SignUpForms;