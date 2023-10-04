import React from "react";
import '../title-and-subtitle/titleAndSubtitle.css'

function TitleAndSubtitle({ title, subtitle }) {

    const titulo = title;
    const subTitulo = subtitle;


    return (
        <div className="forms-field_title">
            <h2>{titulo}</h2>
            <h3>{subTitulo}</h3>
        </div>
    )
}

export default TitleAndSubtitle;