import React from "react";
import "../forms/forms.css";
import SignInForms from "./SignInForms";
import SignUpForms from "./SignUpForms";

const Forms = ({ page }) => {

    const pagePlace = page;

    if (pagePlace == 'login') {
        return (
            <SignInForms/>
        )
    } else if (pagePlace == 'cadastro') {

        return (
            <SignUpForms/>
        )

    }

}







export default Forms;