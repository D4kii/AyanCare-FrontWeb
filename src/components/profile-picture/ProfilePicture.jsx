import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebase";
import { UserOutlined, CameraFilled } from "@ant-design/icons";
import { Button, Progress, Spin } from "antd";
import "./profile-picture.css";
import Loading from "../loading/Loading";

const ProfilePicture = ({ imagem, setImagem, progress, setProgress }) => {
  const [loadingImage, setLoadingImage] = useState(false);

  const handleUpload = (event) => {
    event.preventDefault();

    const file = event.target?.files[0];
    if (!file) return;

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-T:.Z]/g, "");
    const fileName = `${formattedDate}`;

    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setLoadingImage(true);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(newProgress);
      },
      (error) => {
        alert(error);
        setLoadingImage(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImagem(url);
          setLoadingImage(false);
        });
      }
    );
  };

  return (
    <div className="profile-picture_field">
      <div
        className="profile-picture_file-field"
        style={{
          background: imagem == "" ? `url(${<UserOutlined />}) no-repeat fixed center center` : `url(${imagem}) no-repeat fixed center center`,
        }}
      >
        {imagem ? (
          <div
            alt="Foto de perfil"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "100%",
              background: imagem ? `lightgray 50% / cover no-repeat` : "#7E6F94",
              backgroundImage: imagem ? `url(${imagem})` : "none",
            }}
          />
        ) : null}
        {imagem == null && progress ? (
          <Progress
            type="circle"
            style={{
              height: "3rem",
            }}
            percent={progress}
          />
        ) : null}
        {loadingImage && (
          <div className="loading-overlay">
            <Loading />
          </div>
        )}
        <input id="inputImagem" type="file" onChange={handleUpload} style={{ display: "none" }} />
      </div>
      <label
        className="profile-picture_button"
        htmlFor="inputImagem"
        style={{
          cursor: "pointer",
          width: "max-content",
        }}
      >
        <CameraFilled style={{ fontSize: "2rem", color: "#A7A5A4" }} />
      </label>
    </div>
  );
};

export default ProfilePicture;
