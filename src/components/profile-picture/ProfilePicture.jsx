import React from "react";
import './profile-picture.css'
import vector from '../../images/Vector.png'

function ProfilePicture() {


    return(
        <div className="profile-picture">
            <div className="profile-picture_file-field">
            <img src={vector} alt="Ícone de camera" />

            </div>
        </div>
    )
    
}

export default ProfilePicture;