import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../../services/firebase";
import './profile-picture.css'
import { UserOutlined, CameraFilled } from "@ant-design/icons";
import { Button, Progress } from "antd";

const ProfilePicture = ({ imagem, setImagem, progress, setProgress }) => {
  if (imagem == "") {
    console.log(
      'aqui', imagem
    )
  }

  const handleUpload = (event) => {
    event.preventDefault()

    const file = event.target?.files[0]
    console.log('setimage', setImagem);
    if (!file) return;

    //data atual
    const currentDate = new Date();

    // Formatando a data, hora, minutos, segundos e milissegundos
    const formattedDate = currentDate.toISOString().replace(/[-T:.Z]/g, "");

    // Combine a data formatada com o nome original do arquivo
    const fileName = `${formattedDate}`;

    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    console.log(1, setImagem);
    uploadTask.on(
      "state_change",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImagem(url)
          console.log('image', imagem);
        })
      }
    )
  };


  return (
    <div className="profile-picture_field">

      <div className="profile-picture_file-field"

        style={{
          background: imagem == "" ? `url(${<UserOutlined />}) no-repeat fixed center center` : `url(${imagem}) no-repeat fixed center center`,
        }}>
        {imagem ?
          (<img src={imagem} alt="Foto de perfil"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '100%'
            }} />) : null}
        {imagem == null && progress?  
        (<Progress type="circle" 
        style={{
          height:'3rem',
        }} percent={progress} />) : null}
        <input
          id="inputImagem"
          type="file"
          onChange={handleUpload}
          style={{
            display: 'none'
          }}
        />
      </div>
      <label className="profile-picture_button" htmlFor="inputImagem"
        style={{
          cursor: 'pointer',
          width: 'max-content'
        }}>
        <CameraFilled style={{
          fontSize: '2rem',
          color: '#A7A5A4'
        }} />
      </label>
    </div>
  );
};


export default ProfilePicture;
