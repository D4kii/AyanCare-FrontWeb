import React from 'react';
import MenuLandingPage from '../../components/landing-page_components/menu-landing-page/MenuLanding';
import './landing-page.css'
import CardTitleLandinPage from '../../components/landing-page_components/card-title_landing-page/CardTitleLandindPage';

const LandingPage = () => {

    //Conteudo do card do início da página
    const titleCardHeader = 'Auxiliando Cuidadores em sua jornada diária '
    const textCardHeader = 'Nos dedicamos a melhorar a vida de cuidadores e enfermeiros domiciliares servindo nossa aplicação  como uma ferramenta, que simplifica o planejamento, aprimora a comunicação e permite que se concentrem no cuidado e nas conexões com os pacientes. Buscamos tornar o cuidado domiciliar mais eficiente, humano e gratificante. '

    return (
        <div className='landing-page_section'>
                <MenuLandingPage />
            <section className='landing-page_home' id='landing-page_home'>
                <CardTitleLandinPage titleCard={titleCardHeader} textCard={textCardHeader} />

            </section>
            <section className='landing-page_about-us' id='about-us'>
                <h2>Sobre nós</h2>
            </section>
            <section className='landing-page_platforms' id='platforms'>
                <h2>Plataformas</h2>
            </section>
            <section className='landing-page_contacts' id='contacts'>
                <h2>Contatos</h2>

            </section>
        </div>
    );
}

export default LandingPage;