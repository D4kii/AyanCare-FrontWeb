import {React} from "react";
import './buttons-landing-page.css'
import { Button } from "antd";

function ButtonsLandingPage({ nameButtonLogin, nameButtonSignup }) {
    const titleLoginButton = nameButtonLogin;
    const titleSignupButton = nameButtonSignup;



    return (
        <div className="landing-page_buttons-field">
            <div className="landing-page_button-login-field">
                <Button className="landing-page_button-login" href="/login" >
                    <span>{titleLoginButton}</span>
                </Button>
            </div>
            <div className="landing-page_button-signup-field">
                <Button className="landing-page_button-signup" href="/signup">
                    <span>{titleSignupButton}</span>
                </Button>
            </div>
        </div>

    )



}

export default ButtonsLandingPage;