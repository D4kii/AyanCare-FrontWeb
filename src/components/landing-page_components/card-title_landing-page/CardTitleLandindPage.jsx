import React from "react";
import './card-title_landing-page.css'

function CardTitleLandinPage({ titleCard, textCard }) {

    const titulo = titleCard;
    const texto = textCard;

    return (
        <div className="landing-page_home-card">
            <div className="landing-page_home-card-field">
                <div className="landing-page_home-card-title">
                    <h2>{titulo}</h2>
                </div>
                <div className="landing-page_home-card-text">
                    <span>{texto}</span>
                </div>
            </div>
        </div>
    )

}

export default CardTitleLandinPage;