import React from "react";
import axios from "axios";
import './profile-picture.css'
import vector from '../../images/Vector.png'
import { render } from "react-dom";

function ProfilePicture({ enderecoImage }) {


    return(
        <div className="profile-picture">
            <div className="profile-picture_file-field" style={{ backgroundImage: `url("${enderecoImage}")` }}>

            <img src={vector} className="file-cam" alt="Ícone de camera" />

            </div>
        </div>
    )

}

export default ProfilePicture;