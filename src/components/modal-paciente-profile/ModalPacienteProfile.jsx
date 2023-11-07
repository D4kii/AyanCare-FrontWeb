import React from "react";
import './modal-paciente-profile.css'

function CuidadorModalPaciente(){


    return (
        <div>
            <div class="roxo"></div>
            <div class="grupo2">
                <div class="frame1">
                    <img class="img-paciente" src="../img/exemplo.jpg" alt="" />
                    <div class="text">
                        <h2 class="nome-do-paciente">Fofinho</h2>
                        <span class="span-paciente">Paciente</span>
                    </div>
                </div>

                <div class="frame2">
                    <h3 class="h3-titulo">Tratamentos</h3>
                    <div class="tratamentos">
                        <div class="quadrado1">
                            <p class="text">Diabetes</p>
                        </div>
                        <div class="quadrado2">
                            <p class="text">Tiroide</p>
                        </div>
                    </div>
                </div>
                <div class="frame3">
                    <h3 class="h3-titulo">Remédios</h3>
                    <div class="grupo1">
                        <button class="botaozinho">
                            <div class="btn-remedio">
                                <div class="fotoNomeRemedio">
                                    <img class="img-icon" src="../img/pilulas.png" alt="" />
                                    <div class="dadoRemedio">
                                        <h4 class="nome-do-remedio">Glimepirida</h4>
                                        <p class="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p class="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                        <button class="botaozinho">
                            <div class="btn-remedio">
                                <div class="fotoNomeRemedio">
                                    <img class="img-icon" src="../img/pilulas.png" alt="" />
                                    <div class="dadoRemedio">
                                        <h4 class="nome-do-remedio">Glimepirida</h4>
                                        <p class="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p class="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                    </div>
                    <div class="grupo3">
                        <button class="botaozinho">
                            <div class="btn-remedio">
                                <div class="fotoNomeRemedio">
                                    <img class="img-icon" src="../img/pilulas.png" alt="" />
                                    <div class="dadoRemedio">
                                        <h4 class="nome-do-remedio">Glimepirida</h4>
                                        <p class="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p class="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                        <button class="botaozinho">
                            <div class="btn-remedio">
                                <div class="fotoNomeRemedio">
                                    <img class="img-icon" src="../img/pilulas.png" alt="" />
                                    <div class="dadoRemedio">
                                        <h4 class="nome-do-remedio">Glimepirida</h4>
                                        <p class="quanto-tempo-remedio">A cada 8h</p>
                                    </div>
                                </div>
                                <p class="hora-do-remedio">Daqui 12min</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPacienteProfile;