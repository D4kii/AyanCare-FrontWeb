import React from "react";
import { Button, Popover, Space } from 'antd';
import logo from '../../images/logo-branca.png'
import './popover-notification-card.css'


function PopoverCardNotifications({ title, description, time}) {

    const titulo = title;
    const descricao = description;
    const tempo = time;

    return (
        <div className="notificacoes-field">
            

            <div className="notificacoes-field_content-text">
                <span className="notificacoes-field_content-text_title">
                    {titulo}
                </span>
                <p className="notificacoes-field_content-text_description">
                    {description}
                </p>
            </div>
            <p className="notificacoes-field_content-time">
                {time}
            </p>

        </div>
    )

}

export default PopoverCardNotifications;