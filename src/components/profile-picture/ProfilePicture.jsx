import axios from "axios";
import './profile-picture.css'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};



function ProfilePicture({ enderecoImage }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [file, setFile] = useState(enderecoImage);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async () => {
    if (file) {
      const previewDataUrl = await getBase64(file.originFileObj);
      setPreviewImage(previewDataUrl);
      setPreviewTitle(file.name);
      setPreviewOpen(true);
    }
  };

  const handleChange = (info) => {
    if (info.fileList.length === 1) {
      setFile(info.fileList[0]);
    } else {
      setFile(null);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-circle"
        fileList={file ? [file] : []}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {file ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="Foto de perfil"
          style={{ width: '100%' }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}

export default ProfilePicture;
