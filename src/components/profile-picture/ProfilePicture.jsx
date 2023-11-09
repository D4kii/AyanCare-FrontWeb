import React, { useState } from "react";

const ProfilePicture = ({ imagem, setImagem }) => {

  const handleImagemSelecionada = (event) => {
    const arquivo = event.target.files[0];

    if (arquivo) {
      // Verifique se o arquivo é uma imagem (opcional)
      if (/\.(jpe?g|png|gif|bmp)$/i.test(arquivo.name)) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const agora = new Date();
          const ano = agora.getFullYear();
          const mes = agora.getMonth() + 1;
          const dia = agora.getDate();
          const hora = agora.getHours();
          const minutos = agora.getMinutes();
          const segundos = agora.getSeconds();
          const milissegundos = agora.getMilliseconds();

          const nomeDoArquivo = `${ano}${mes}${dia}${hora}${minutos}${segundos}${milissegundos}.jpg`;

          const arquivoJSON = { url: e.target.result, nome: nomeDoArquivo }

          setImagem(arquivoJSON);
        };

        reader.readAsDataURL(arquivo);
      } else {
        alert("Selecione um arquivo de imagem válido (JPEG, PNG, GIF, BMP).");
      }
    }
  };

  return (
    <div>
      <label htmlFor="inputImagem" style={botaoEstilo}>
        Selecione uma imagem
      </label>
      <input
        id="inputImagem"
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImagemSelecionada}
        multiple={false} // Permite apenas um arquivo
        style={{ display: "none" }}
      />
      {imagem && (
        <div>
          <img src={imagem} alt="Foto de perfil" />
        </div>
      )}
    </div>
  );
};


const botaoEstilo = {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
};

export default ProfilePicture;
