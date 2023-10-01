import React from 'react';
import "../../styles/AlbumStyles.css";

const AlbumCard = ({ album }) => {
    return (
        <div className="album-card">
            <img src={album['im:image'][2].label} alt={album.title.label} />
            <div>{album.title.label}</div>
            <div>Artist: {album['im:artist'].label}</div>
        </div>
    );
}

export default AlbumCard;