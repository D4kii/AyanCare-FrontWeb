import React from 'react';
import MenuLandingPage from '../../components/landing-page_components/menu-landing-page/MenuLanding';
import './landing-page.css'
import CardTitleLandinPage from '../../components/landing-page_components/card-title_landing-page/CardTitleLandindPage';
import equipeImage from '../../images/equipe.jpg'
import calendarioImage from '../../images/calendario.jpg'
import relatorioImage from '../../images/relatorio.jpg'
import CardsAboutUs from '../../components/landing-page_components/cards_landing-page/CardsAboutUs';

const LandingPage = () => {

    //Conteudo do card do início da página
    const titleCardHeader = 'Auxiliando Cuidadores em sua jornada diária '
    const textCardHeader = 'Nos dedicamos a melhorar a vida de cuidadores e enfermeiros domiciliares servindo nossa aplicação  como uma ferramenta, que simplifica o planejamento, aprimora a comunicação e permite que se concentrem no cuidado e nas conexões com os pacientes. Buscamos tornar o cuidado domiciliar mais eficiente, humano e gratificante. '

    const sobreNosTitulo = 'Sobre nós';
    const sobreNosTexto = ' A missão da AyanCare é simplificar e melhorar a vida dos cuidadores e enfermeiros domiciliares, usando a tecnologia para tornar o cuidado em casa mais eficiente e humano. Seu aplicativo oferece ferramentas para planejamento, comunicação e permitir que os profissionais dediquem mais tempo aos pacientes. A empresa valoriza a gratidão pelos cuidadores e busca capacitar aqueles que se dedicam ao cuidado dos outros, com base em valores de inovação, ética e responsabilidade social. Eles estão empenhados em transformar o cuidado domiciliar em uma experiência mais gratificante e significativa, convidando outros a se juntarem à sua missão na comunidade AyanCare.';

    return (
        <div className='landing-page_section'>
            <MenuLandingPage />
            <section className='landing-page_home' id='landing-page_home'>
                <CardTitleLandinPage
                    titleCard={titleCardHeader}
                    textCard={textCardHeader} />

            </section>

            <div className="landing-page-home_cards-field">
                <CardsAboutUs
                    titleCard={'Organize sua Agenda'}
                    subtitleCard={'Praticidade'}
                    imageCard={calendarioImage}
                    descriptionImageCard={'Um teclado, um tablet aberto em um software de agendamento, um caderno aberto e um celular em cima de uma mesa de escritório.'}
                    textCard={'Você pode fazer do nosso aplicativo a sua agenda, gerenciando alarmes e eventos dos seus pacientes.'} />
                <CardsAboutUs
                    titleCard={'Se conecte'}
                    subtitleCard={'Facilidade'}
                    imageCard={equipeImage}
                    descriptionImageCard={'Quatro pessoas de diferentes unindo suas mãos em um comprimento de equipe'}
                    textCard={'Você pode conectar sua conta com as de seus pacientes, se eles tiverem conta no aplicativo.'} />
                <CardsAboutUs
                    titleCard={'Faça seus Relatórios'}
                    subtitleCard={'Organização '}
                    imageCard={relatorioImage}
                    descriptionImageCard={'A mão de uma pessoa segurando uma caneta enquanto escreve em uma agenda que esta em cima de um balcão'}
                    textCard={'Você pode deixar registrado no nosso aplicativo seus relatórios diário de cada paciente que estiver sob seus cuidados.'} />

            </div>
            <div className="landing-page_sections-aboutus-field">

                <div className="landing-page_section-border">
                    <section className='landing-page_about-us' id='about-us'>
                        <div className="landing-page_about-us-field">
                            <h2 className='landing-page_section-about-us_title'>{sobreNosTitulo}</h2>
                            <span className='landing-page_section-about-us_text'>{sobreNosTexto}</span>
                        </div>
                    </section>
                    <section className='landing-page_platforms' id='platforms'>
                        <h2 className='landing-page_section-about-us_title'>Plataformas</h2>
                    </section>
                    <section className='landing-page_valores' id='valores'>
                        <h2 className='landing-page_section-about-us_title'>Valores</h2>
                        <div className="landing-page_valores-text-field">
                            <p className='landing-page_section-about-us_text'>Inovação Tecnológica: Abraçamos a inovação como parte fundamental do nosso trabalho. Estamos empenhados em explorar constantemente novas soluções tecnológicas e práticas de desenvolvimento para criar aplicativos de saúde de vanguarda.
                                Excelência Técnica: Buscamos constantemente a excelência em nosso trabalho de desenvolvimento, impulsionando a qualidade e a eficácia de nossos aplicativos.</p>
                            <p className='landing-page_section-about-us_text'>Colaboração e Parcerias: Valorizamos parcerias estratégicas e colaborações com outras empresas e profissionais de saúde para criar soluções holísticas e eficazes.
                                Compromisso com a Saúde:  Nosso compromisso é melhorar a saúde e o bem-estar das pessoas por meio de tecnologia. Valorizamos profundamente a responsabilidade de criar aplicativos que promovam a saúde e a qualidade de vida.</p>
                        </div>
                    </section>

                </div>
            </div>
            <section className='landing-page_contacts' id='contacts'>
                <h2 className='landing-page_section-title'>Contatos</h2>

            </section>
        </div>
    );
}

export default LandingPage;