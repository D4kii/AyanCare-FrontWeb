import React, { useContext, useState } from "react";
import '../signin/login.css';
import SignInForms from "../../components/forms/SignInForms";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import image from "../../images/logo-branca.png"
import TitleAndSubtitle from "../../components/title-and-subtitle/TitleAndSubtile";
import LinkCadastroLogin from "../../components/link-cadastro-login/LinkCadastroLogin";
import { AuthContext } from "../../contexts/auth";


const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

function SignIn() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", { email, password });
        login(email, password); // integração com meu contexto / API
    }

    const welcomeLoginTitle = 'Bem-vindo de Volta!'
    const welcomeLoginSubtitle = 'AyanCare é tudo que você precisa para administrar, de forma eficiente e prática, sua rotina com seus pacientes e seus compromissos do cotidiano.'

    const welcomeContainerTitle = 'Bem-vindo ao nosso Aplicativo'
    const welcomeContainerSubtitle = 'Transforme o cuidado em uma jornada gratificante.'

    

    return (
        <div className="login-screen">
            <div className="forms-field">
                <div className="forms-organization">
                    <TitleAndSubtitle title={welcomeLoginTitle} subtitle={welcomeLoginSubtitle} />
                    <SignInForms
                        emailUseState={email}
                        passwordUseState={password}
                        setStatePasswordParameter={(event) => setPassword(event.target.value)}
                        setStateEmailParameter={(event) => setEmail(event.target.value)}
                        handleSubmitFunction={handleSubmit}
                    />
                    <LinkCadastroLogin caminho={'login'} />
                </div>
            </div>
            <div className="welcome-field">
                <WelcomeContainer title={welcomeContainerTitle} text={welcomeContainerSubtitle} logo={image} />
            </div>
        </div>
    )

}

export default SignIn;