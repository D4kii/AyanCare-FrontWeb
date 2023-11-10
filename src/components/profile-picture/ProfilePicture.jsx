import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../../services/firebase";

const ProfilePicture = ({ imagem, setImagem, progress, setProgress, handleUpload }) => {



  return (
    <form onSubmit={handleUpload}> 
      <label htmlFor="inputImagem" style={botaoEstilo}>
        Selecione uma imagem
      </label>
      <input
        id="inputImagem"
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
      />
      <div>
        <img src={imagem} alt="Foto de perfil" />
      </div>
      <button type="submit">enviar</button>
    </form>
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
