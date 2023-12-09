import React from "react";
import notFoundImage from '../../images/not-found.svg'

function NotFoundMessage({ title, description }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                width: '40rem'
            }}
        >
            <img
                style={{
                    width: '20vw'
                }}
                src={notFoundImage}
                alt=""
                srcset="" />
            <h3
            style={{
                fontFamily:'Manrope',
                textAlign:'center',
                fontSize:'1.3rem',
                fontWeight:'500',
                color:'var(--neutral-800, #191D23)'
            }}
            >
                {title}
            </h3>
            <span
                style={{
                    textAlign: 'center',
                    fontFamily: 'Manrope',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'var(--neutral-500, #64748B)'
                }}
            >
                {description}
            </span>
        </div>
    );
}

export default NotFoundMessage;