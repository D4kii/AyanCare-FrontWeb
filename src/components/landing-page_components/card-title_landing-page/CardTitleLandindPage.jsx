import React from "react";
import './card-title_landing-page.css'
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

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
            <Button
            className="landing-page_home-card-button"  href="/signup"
            style={{
                textDecoration:'none'
            }}
            >Começar{<RightOutlined />}</Button>
        </div>
    )

}

export default CardTitleLandinPage;