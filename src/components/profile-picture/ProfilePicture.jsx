import React, { useState } from "react";

const ProfilePicture = ({ imagem, setImagem }) => {

  const handleImagemSelecionada = (event) => {
    const arquivo = event.target.files[0];

    if (arquivo) {
      // Verifique se o arquivo é uma imagem (opcional)
      if (/\.(jpe?g|png|gif|bmp)$/i.test(arquivo.name)) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setImagem(e.target.result);
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
