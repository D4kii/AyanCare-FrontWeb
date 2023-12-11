import React from "react";
import './modal-paciente-profile.css'
import { Card, Collapse, Divider, Empty, List, Modal, Space, Tag, theme } from "antd";
import { CaretRightOutlined, UserOutlined } from "@ant-design/icons";

function ModalPacienteProfile({ openModal, onCancel, dataPaciente }) {
    console.log(dataPaciente);
    const { token } = theme.useToken();

    return (
        <Modal
            title="Perfil do Paciente"
            open={openModal}
            onCancel={onCancel}
            footer={null}
            width={'60vw'}

        >
            {
                dataPaciente ?
                    <div
                        className="paciente-profile Modal">
                        <div
                            style={{
                                marginBottom: '1rem'
                            }}>

                            <div className="roxo"></div>
                            <div className="grupo2">
                                <div className="frame1">
                                    <div className="img-paciente"
                                        style={{
                                            background: dataPaciente.paciente.foto ? `lightgray 50% / cover no-repeat` : '#7E6F94',
                                            backgroundImage: dataPaciente.paciente.foto ? `url(${dataPaciente.paciente.foto})` : 'none'
                                        }} />
                                    <div className="text">
                                        <h2 className="nome-do-paciente">{dataPaciente.paciente.nome}</h2>
                                        <span className="span-paciente">{dataPaciente.paciente.idade} anos</span>
                                    </div>

                                </div>
                                <Divider orientation="left">Comorbidades</Divider>
                                <Space size={[0, 'small']} wrap>
                                    {dataPaciente.paciente.comorbidades && dataPaciente.paciente.comorbidades[0].id ? (
                                        dataPaciente.paciente.comorbidades.map((comorbidade) => (
                                            <Tag key={comorbidade.id} color={'purple'}>
                                                {comorbidade.nome}
                                            </Tag>
                                        ))
                                    ) : (
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhuma comorbidade cadastrada'} />
                                    )}
                                </Space>
                                <Divider orientation="left">Doenças Crônicas</Divider>
                                <Space size={[0, 'small']} wrap>
                                    {dataPaciente.paciente.doencas_cronicas && dataPaciente.paciente.doencas_cronicas[0].id ? (
                                        dataPaciente.paciente.doencas_cronicas.map((doencaCronica) => (
                                            <Tag key={doencaCronica.id} color={'purple'}>
                                                {doencaCronica.nome} grau {doencaCronica.grau}
                                            </Tag>
                                        ))
                                    ) : (
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhuma doença crônica cadastrada'} />
                                    )}
                                </Space>
                                <Divider orientation="left">Medicamentos</Divider>
                                {dataPaciente.paciente.medicamentos && dataPaciente.paciente.medicamentos[0].id ? (
                                    <List
                                        header={null}
                                        footer={null}
                                        style={{
                                            width: '100%'
                                        }}
                                        dataSource={dataPaciente.paciente.medicamentos}
                                        renderItem={(item) => (
                                            <List.Item
                                                actions={
                                                    [
                                                        <a style={{ cursor: 'default', color: 'purple' }} key="list-loadmore-edit">{item.quantidade}</a>,
                                                        <a style={{ cursor: 'default', color: 'purple' }} key="list-loadmore-edit">Validade: {item.validade}</a>
                                                    ]
                                                }
                                            >
                                                <Collapse
                                                    size="small"
                                                    style={{
                                                        width: '100%',
                                                        background: token.colorBgContainer,
                                                    }} items={[
                                                        {
                                                            key: item.id,
                                                            label: item.nome,
                                                            children:
                                                                <Card
                                                                    size="default"
                                                                    title="Alarme"
                                                                    style={{
                                                                        width: 300,
                                                                    }}
                                                                >
                                                                    <span></span>
                                                                    <div><span>horario:</span> {item.alarme?.horario} </div>
                                                                    <div><span>intervalo:</span> {item.alarme?.intervaloTempo}</div>

                                                                </Card>


                                                        }
                                                    ]} bordered={false}
                                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                                    key={item.id} />
                                            </List.Item>
                                        )}
                                    />
                                ) : (
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum medicamento cadastrado'} />
                                )}

                            </div>
                        </div>
                    </div>
                    :
                    <p>nada</p>
            }

        </Modal >
    )
}

export default ModalPacienteProfile;