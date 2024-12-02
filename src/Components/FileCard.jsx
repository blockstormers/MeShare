import React from "react";

const FileCard = ({ file, onClick }) => {
  return (
    <div className="file-card" onClick={() => onClick(file)}>
      <img src={file.preview} alt={file.name} className="file-card-image" />
      <div className="file-card-title">{file.name}</div>
    </div>
  );
};

export default FileCard;
