import React from "react";
import './cuidador-profile.css'
import perfil from '../../images/background-image.png'

//COMPONENTES
import Button from "../button/Button";
import ProfilePicture from "../profile-picture/ProfilePicture";
import Input from "antd/es/input/Input";
import { Avatar, List } from "antd";


const data = [
    {
        title: 'Realizar Relatório',
    },
    {
        title: 'Iniciar Turno',
    },
];

function CuidadorProfile({ profilePicture, profileDescription, nameProfile, imageUseState, setImagemUseState }) {


    const fotoPerfil = profilePicture
    const description = profileDescription
    // 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
    const name = nameProfile

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
                            imagem={imageUseState}
                            setImagem={setImagemUseState}
                        />
                        <h3 className="profile-name_cuidador">{name}</h3>
                        <h3 className="profile-description_cuidador">cuidador</h3>
                    </div>
                    <div className="cuidador-profile_informations-field_first-column_count-conection">
                        <div className="count-conection_title">
                            Seu código de conexão como cuidador é:
                        </div>
                        <Input
                            value={'33445'}
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
                <div className="cuidador-profile_informations-field_third-column">
                    <h4 className="cuidador-profile_tarefas-title">Tarefas de hoje</h4>
                    <div className="cuidador-profile_tarefas-cards">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuidadorProfile;