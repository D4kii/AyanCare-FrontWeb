import React, { useState } from "react";
import './cuidador-profile.css'
import perfil from '../../images/background-image.png'

//COMPONENTES
import Button from "../button/Button";
import ProfilePicture from "../profile-picture/ProfilePicture";
import Input from "antd/es/input/Input";
import { Avatar, List } from "antd";
import CuidadorEditarProfile from "./cuidador-editar-profile/CuidadorEditarProfile";


function CuidadorProfile({
    profilePicture,
    profileDescription,
    nameProfile,
    imageUseState,
    setImagemUseState,
    idCuidador,
    setDataCuidador
}) {
    const [modoEdicao, setModoEdicao] = useState(false);
    const handleEditarPerfil = () => {
        setModoEdicao(true);
    };
    const cancelEditarPerfil = () => {
        setModoEdicao(false);
    };

    const fotoPerfil = profilePicture
    const description = profileDescription
    console.log(description);
    const name = nameProfile

    return (
        <div className="cuidador-profile">
            <div className="cuidador-profile_background">
                <div className="cuidador-profile_edit-profile"
                    style={{
                        display: modoEdicao ? 'none' : 'flex'
                    }}
                >
                    <Button
                        heigthButton={'30px'}
                        widthButton={'7.5rem'}
                        color={'#FAF0ED'}
                        nameButton={'Editar Perfil'}
                        contentColor={'#35225F'}
                        textSize={'14px'}
                        onClick={handleEditarPerfil}
                    />
                </div>

            </div>
            {modoEdicao ? (
                <CuidadorEditarProfile
                    onCancel={cancelEditarPerfil}
                    setNewDataCuidador={setDataCuidador}
                />
            ) : (
                <div className="cuidador-profile_informations-field">

                    <div className="cuidador-profile_informations-field_first-column">
                        <div className="profile-image_cuidador">
                            <div className="profile-image_cuidador-field"
                                style={{
                                    background: imageUseState ? `lightgray 50% / cover no-repeat` : '#7E6F94',
                                    backgroundImage: imageUseState ? `url(${imageUseState})` : 'none'
                                }} />
                            <h3 className="profile-name_cuidador">{name}</h3>
                            <h3 className="profile-description_cuidador">cuidador</h3>
                        </div>
                        <div className="cuidador-profile_informations-field_first-column_count-conection">
                            <div className="count-conection_title">
                                Seu código de conexão como cuidador é:
                            </div>
                            <Input
                                value={idCuidador}
                                style={{
                                    width: '118px',
                                    border: '1px solid #AEA5BC',
                                    fontSize: '20px',
                                    letterSpacing: '5px',
                                    textAlign: 'center'
                                }}
                            />
                        </div>
                    </div>
                    <div className="cuidador-profile_informations-field_second-column">
                        <p className="description-experience">
                            {description}
                        </p>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default CuidadorProfile;