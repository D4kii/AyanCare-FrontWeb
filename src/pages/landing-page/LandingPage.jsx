import React from 'react';
import MenuLandingPage from '../../components/landing-page_components/menu-landing-page/MenuLanding';
import './landing-page.css'
import CardTitleLandinPage from '../../components/landing-page_components/card-title_landing-page/CardTitleLandindPage';
import CardsAboutUs from '../../components/landing-page_components/cards_landing-page/CardsAboutUs';
import desktopAndMobileImage from '../../images/desktop-mobile.svg'
import relatorioImage from '../../images/relatorio-image.svg'
import agendaImage from '../../images/agenda-imagem.svg'
import vinculoImage from '../../images/vinculo-imagem.svg'
import propostaAplicacaoImage from '../../images/proposta-aplicacao-maos.svg'
import multipataformaImage from '../../images/multiplataforma.svg'
import logoImage from '../../images/logo-roxa.svg'
import { Carousel } from 'antd';

const LandingPage = () => {

    //Conteudo do card do início da página
    const titleCardHeader = 'Auxiliando Cuidadores em sua jornada diária '
    const textCardHeader = 'Se estiver precisando de uma ferramenta para sua rotina como cuidador, AyanCare está aqui para você!'

    const sobreNosTitulo = 'Sobre nós';
    const sobreNosTexto = ' A missão da AyanCare é simplificar e melhorar a vida dos cuidadores e enfermeiros domiciliares, usando a tecnologia para tornar o cuidado em casa mais eficiente e humano. Seu aplicativo oferece ferramentas para planejamento, comunicação e permitir que os profissionais dediquem mais tempo aos pacientes. A empresa valoriza a gratidão pelos cuidadores e busca capacitar aqueles que se dedicam ao cuidado dos outros, com base em valores de inovação, ética e responsabilidade social. Eles estão empenhados em transformar o cuidado domiciliar em uma experiência mais gratificante e significativa, convidando outros a se juntarem à sua missão na comunidade AyanCare.';

    return (
        <div className='landing-page_section'>
            <MenuLandingPage />
            <section className='landing-page_home' id='landing-page_home'>
                <CardTitleLandinPage
                    titleCard={titleCardHeader}
                    textCard={textCardHeader} />

                <div
                    style={{
                        height: '110vh',
                        display: 'flex',
                        alignItems: 'end'

                    }}
                >
                    <img
                        style={{
                            width: '60vw'
                        }}
                        src={desktopAndMobileImage} alt="" />
                </div>
            </section>


            <div className="landing-page_sections-aboutus-field">
                <div
                    style={{
                        height: '8rem',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h2 className="landing-page_sections-aboutus-field-title">Quais os Diferenciais da AyanCare?</h2>

                </div>

                <div
                    className='landing-page_sections-aboutus-field-carousel'
                >
                    <Carousel
                        style={{
                            height: '80vh'
                        }}
                        autoplay>
                        <div
                        >
                            <section
                                style={{
                                    backgroundImage: `URL(${relatorioImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '75vh',
                                    width: '100vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'self-start',
                                    justifyContent: 'end'
                                }}
                            >
                                <div
                                    style={{
                                        height: '10rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        justifyContent: 'center',
                                        gap: '2rem',
                                        marginLeft: '2rem'
                                    }}
                                >
                                    <h3 className='landing-page_sections-aboutus-field-carousel-title'>Relatórios</h3>
                                    <span className='landing-page_sections-aboutus-field-carousel-description'>Você pode deixar registrado no nosso aplicativo seus relatórios diário de cada paciente que estiver sob seus cuidados.</span>

                                </div>
                            </section>
                        </div>
                        <div
                            style={{ height: '50vh' }}
                        >
                            <section
                                style={{
                                    backgroundImage: `URL(${vinculoImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '75vh',
                                    width: '100vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'self-start',
                                    justifyContent: 'end'
                                }}
                            >
                                <div
                                    style={{
                                        height: '10rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        justifyContent: 'center',
                                        gap: '2rem',
                                        marginLeft: '2rem'
                                    }}
                                >
                                    <h3 className='landing-page_sections-aboutus-field-carousel-title'>Conexão</h3>
                                    <span className='landing-page_sections-aboutus-field-carousel-description'>Você pode conectar sua conta com as de seus pacientes, se eles tiverem conta no aplicativo.</span>
                                </div>
                            </section>
                        </div>
                        <div
                            style={{ height: '50vh' }}
                        >
                            <section
                                style={{
                                    backgroundImage: `URL(${agendaImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '75vh',
                                    width: '100vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'self-start',
                                    justifyContent: 'end'
                                }}
                            >
                                <div
                                    style={{
                                        height: '10rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        justifyContent: 'center',
                                        gap: '2rem',
                                        marginLeft: '2rem'
                                    }}
                                >
                                    <h3 className='landing-page_sections-aboutus-field-carousel-title'>Agenda</h3>
                                    <span className='landing-page_sections-aboutus-field-carousel-description'>Você pode fazer do nosso aplicativo a sua agenda, gerenciando os alarmes e eventos dos seus pacientes. </span>
                                </div>
                            </section>
                        </div>
                    </Carousel>
                </div>

            </div>
            <section
                style={{
                    backgroundImage: `URL(${propostaAplicacaoImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'self-start',
                    justifyContent: 'center'
                }}
                className='landing-page_contacts' id='contacts'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        width: '50vw',
                        justifyContent: 'center',
                        alignItems: 'self-start',
                        marginLeft: '4rem'
                    }}
                >
                    <img src={logoImage}
                        style={{
                            width: '10rem',
                            display: 'flex'
                        }} />
                    <h2
                        style={{
                            fontFamily: 'manrope',
                            fontSize: '2.5rem',
                            color: '#35225F',
                            fontWeight: '700'
                        }}
                    >Proposta da Aplicação</h2>
                    <span
                        style={{
                            fontFamily: 'manrope',
                            fontSize: '1.2re',
                            color: '#35225F',
                            fontWeight: '400',
                            lineHeight: '2rem'
                        }}
                    >A missão da AyanCare é simplificar e melhorar a vida dos cuidadores e enfermeiros domiciliares, usando a tecnologia para tornar o cuidado em casa mais eficiente e humano. Oferece ferramentas para planejamento, comunicação e permitir que os profissionais dediquem mais tempo aos pacientes. Estamos empenhados em transformar o cuidado domiciliar em uma experiência mais gratificante e significativa.</span>
                </div>

            </section>
            <section
                style={{
                    backgroundColor: '#fff',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '40vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <img
                            style={{
                                width: '30rem'
                            }}
                            src={multipataformaImage} alt="" />
                    </div>
                </div>
                <div
                    style={{
                        width: '60vw',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}
                >
                    <h2
                        style={{
                            fontFamily: 'manrope',
                            fontSize: '2.5rem',
                            color: '#35225F',
                            fontWeight: '700'
                        }}
                    >Multiplataformas</h2>
                    <div
                        style={{
                            width: '50vw'
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'manrope',
                                fontSize: '1.2rem',
                                color: '#35225F',
                                width: '30vw',
                                fontWeight: '400',
                                lineHeight: '2rem'
                            }}
                        >Cuidadores e Pacientes podem ter acesso a todas as funcionalidades via Mobile. E somente o cuidador via desktop.
                        </span>

                    </div>
                </div>
            </section>
            <footer
                style={{
                    background: '#2E214B',
                    width: '100vw',
                    height: '200px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'#fff',
                    fontFamily:'manrope'
                }}
            >
                © 2023 Ayan Corp. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default LandingPage;