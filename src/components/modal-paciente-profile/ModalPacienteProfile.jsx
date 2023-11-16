import React from "react";
import './modal-paciente-profile.css'

function CuidadorModalPaciente(){


    return (
        <div>
            <div className="roxo"></div>
            <div className="grupo2">
                <div className="frame1">
                    <img className="img-paciente" src="../img/exemplo.jpg" alt="" />
                    <div className="text">
                        <h2 className="nome-do-paciente">Fofinho</h2>
                        <span className="span-paciente">Paciente</span>
                    </div>
                </div>

                <div className="frame2">
                    <h3 className="h3-titulo">Tratamentos</h3>
                    <div className="tratamentos">
                        <div className="quadrado1">
                            <p className="text">Diabetes</p>
                        </div>
                        <div className="quadrado2">
                            <p className="text">Tiroide</p>
                        </div>
                    </div>
                </div>
                <div className="frame3">
                    <h3 className="h3-titulo">Remédios</h3>
                    <div className="grupo1">
                        <button className="botaozinho">
                            <div className="btn-remedio">
                                <div className="fotoNomeRemedio">
                                    <img className="img-icon" src="../img/pilulas.png" alt="" />
                                    <div className="dadoRemedio">
                                        <h4 className="nome-do-remedio">Glimepirida</h4>
                                        <p className="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p className="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                        <button className="botaozinho">
                            <div className="btn-remedio">
                                <div className="fotoNomeRemedio">
                                    <img className="img-icon" src="../img/pilulas.png" alt="" />
                                    <div className="dadoRemedio">
                                        <h4 className="nome-do-remedio">Glimepirida</h4>
                                        <p className="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p className="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                    </div>
                    <div className="grupo3">
                        <button className="botaozinho">
                            <div className="btn-remedio">
                                <div className="fotoNomeRemedio">
                                    <img className="img-icon" src="../img/pilulas.png" alt="" />
                                    <div className="dadoRemedio">
                                        <h4 className="nome-do-remedio">Glimepirida</h4>
                                        <p className="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p className="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                        <button className="botaozinho">
                            <div className="btn-remedio">
                                <div className="fotoNomeRemedio">
                                    <img className="img-icon" src="../img/pilulas.png" alt="" />
                                    <div className="dadoRemedio">
                                        <h4 className="nome-do-remedio">Glimepirida</h4>
                                        <p className="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p className="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPacienteProfile;