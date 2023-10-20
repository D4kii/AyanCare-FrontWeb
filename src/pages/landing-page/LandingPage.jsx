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
                    textCard={'Você pode fazer do nosso aplicativo a sua agenda, gerenciando seus turnos, os alarmes e eventos dos seus pacientes.'} />
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

                    <h2>Sobre nós</h2>
                </section>
                <section className='landing-page_platforms' id='platforms'>
                    <h2>Plataformas</h2>
                </section>

            </div>
            </div>
            <section className='landing-page_contacts' id='contacts'>
                <h2>Contatos</h2>

            </section>
        </div>
    );
}

export default LandingPage;