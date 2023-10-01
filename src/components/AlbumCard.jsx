import React from 'react';
import "../../styles/AlbumStyles.css";

const AlbumCard = ({ album }) => {
    return (
        <div className="album-container">
            <div className="album-card">
                <img src={album['im:image'][2].label} alt={album.title.label} />
                <div className="album-text-overlay">
                    <div className="album-title">{album.title.label}</div>
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;