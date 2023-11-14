import { ConfigProvider, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import './create-relatorio-modal.css'
import { getPacientesByIDCuidador } from "../../services/api";

function CreateRelatorioModal({ open, onCancel }) {

    const cuidadorLocalStorage = localStorage.getItem('cuidador')

    const [menuClick, setMenuClick] = useState('')

    const onClick = (e) => {
        console.log(menuClick);
        setMenuClick(e.key)
    };


    const handleLogout = () => {
        logout()
    }


    // const [paciente, setPaciente] = useState();
    // const [loading, setLoading] = useState(true);
    // const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    // const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getPacientesByIDCuidador(idCuidador);
    //             setRelatorio(data);
    //             console.log('====================================');
    //             console.log(data);
    //             console.log('====================================');
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Erro ao buscar dados da API:', error);
    //             setLoading(false);
    //         }
    //     };

    //     if (idCuidador) {
    //         fetchData();
    //     }
    // }, [idCuidador]);


    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            padding: 0,
                        },
                    }
                }}
            >

                <Modal
                    open={open}
                    onCancel={onCancel}
                    footer={null}
                    width={'80vw'}
                    style={{
                        borderRadius: '12px',
                        height: '70vh',
                        width: '80vw',
                        padding: 0
                    }}
                >
                    <div
                        className='create-relatorio-modal Modal'>
                        <h2 className="create-relatorio-modal_title">
                            Criar Relatório
                        </h2>
                        {/* <Select
                            defaultValue="lucy"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'Manager',
                                    options: [
                                        { label: 'Jack', value: 'jack' },
                                        { label: 'Lucy', value: 'lucy' },
                                    ],
                                },
                                {
                                    label: 'Engineer',
                                    options: [{ label: 'yiminghe', value: 'Yiminghe' }],
                                },
                            ]}
                        /> */}





                    </div>
                </Modal>
            </ConfigProvider>
        </div >
    );
}

export default CreateRelatorioModal;