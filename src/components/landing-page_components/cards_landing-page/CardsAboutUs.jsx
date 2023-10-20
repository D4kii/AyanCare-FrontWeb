import React from "react";
import './cards-landing-page.css'

function CardsAboutUs({ imageCard, titleCard, subtitleCard, textCard, descriptionImageCard }) {

    const image = imageCard;
    const title = titleCard;
    const subtitle = subtitleCard;
    const text = textCard;
    const description = descriptionImageCard;

    return (
        <div className="landing-page_cards-about-us">

            <img src={image} alt={description} />
            <div className="landing-page_cards-about-us_text-field">
                <span className="cards-about-us_subtitle">
                    {subtitle}
                </span>
                <div className="cards-about-us_title-and-text">
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {text}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default CardsAboutUs;