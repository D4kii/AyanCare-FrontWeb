import React from "react";
import '../welcome-container/welcome-container.css'

function WelcomeContainer({title, text}) {

    const titulo = title;
    const texto = text;
    
    return(
        <div className="container-field">
            <div className="text_container-field">
                <img src="https://lh3.googleusercontent.com/pw/ADCreHfJucKctNvrWp4zsnYFXgycmp7pVCPcXOtp0P65KQiwXL3sdMGKu4UH8g4CKnjrrOJIgwBBoc3Oazk3lb5zA2bYFm00dGaCU-caM0ddWm6U3hQg_edlb-OLfTygd6inGwTa2qEmKxEw2ohjArvY3-PqyJi60WlpcpdkOm3WVaIshhgRAoSnA3ppwmuzOqEtayBZUh46z0PGSL1yTrRwOKFswlybq_L8DUPPXZAMTuRXeiAtpWoKtZCZm2_ndY_KuHgsAayTgXG1emrAOwQkkL-bbpoaQrOo5yV9av0qIM55F8aVcArPM0h2t3j6fVbmo21lCmbK_SACWsE7bFcIx8GTlnumw0ru_8HMI4j-ulnZbwrgb8_1MbK1lR3L1syIQN7uMdlDvrRz7NOhFgU4of4tQ1O5-0L4GNCAsFaBmx0UYcmAQR-WlgO6I900xP8x1ylDQTzKJIMxtT87wWFK50EZgbIcyvmOUp8uUTZeSnPByo5FxKIvPyN-WitdgFFdfYCfxshNhawtGUYVbpMRX79h-iogjoydhsecusOKI94xgFyh7LU_9YuIgYDY5xNIC8wvU-h_WK3R9qdfw-NgcJfzIDLmhfyltKpWCW4Or8_VHfhYI6tshNWlf_m81vjQO4iCMpRRXlKpc1mW0k66aXwRxjv5orOdL1MC-6n0QliEz9E4a-vKJP1DGjRzk1KafybAe1a_tTlGy8A_Dj0WJO_V5zCeknVyKFhZdL6UV5hRHtWiNHwVjG7hieHABQFS8-wDrdYajVDH8JpgcqREFu-k5oreWFH7EJL9ju4p3Lq4XDUcxMDJj8TUJn8sS0sjSJzgTAYyvlwmg9rlz3815uoxQL8GCILFOL-24Q2cUpCvywaKgBDaSMzCRrl_LEHH7Yf07NSsB4UzmodWmEKVVFACtnApFrkIrdJdQVbGZ1r8y622db9QeDEBTgRGgQ=w142-h101-s-no?authuser=0" alt="Logo da empresa, com duas personas se abraçando" />
                <h1>{titulo}</h1>
                <span>{texto}</span>
            </div>

        </div>
    )
}

export default WelcomeContainer;