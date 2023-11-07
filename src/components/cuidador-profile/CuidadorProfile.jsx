import React from "react";
import './cuidador-profile.css'
import perfil from '../../images/background-image.png'

//COMPONENTES
import Button from "../button/Button";
import ProfilePicture from "../profile-picture/ProfilePicture";
import Input from "antd/es/input/Input";

function CuidadorProfile() {

    const name = 'Paula'

    return (
        <div className="cuidador-profile">
            <div class="cuidador-profile_background">
                <div className="cuidador-profile_edit-profile">

                    <Button
                        heigthButton={'30px'}
                        widthButton={'7.5rem'}
                        color={'#FAF0ED'}
                        nameButton={'Editar Perfil'}
                        contentColor={'#35225F'}
                        textSize={'14px'}
                    />
                </div>

            </div>
            <div className="cuidador-profile_informations-field">
                <div className="cuidador-profile_informations-field_first-column">
                    <div className="profile-image_cuidador">
                        <ProfilePicture
                            enderecoImage={perfil}
                        />
                        <h3 className="profile-name_cuidador">{name}</h3>
                        <h3 className="profile-description_cuidador">cuidador</h3>
                    </div>
                    <div className="cuidador-profile_informations-field_first-column_count-conection">
                        <div className="count-conection_title">
                        Seu código de conexão como cuidador é:
                        </div>
                        <Input></Input>
                    </div>
                </div>
                <div className="cuidador-profile_informations-field_second-column">
                    <p className="description-experience">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CuidadorProfile;