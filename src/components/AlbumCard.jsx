import React, { useState } from 'react';
import "../../styles/AlbumStyles.css";

const AlbumCard = ({ album }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        event.stopPropagation(); 
        setIsFavorited(!isFavorited);
        // We can also store the favorite state to a global store or local storage here
    };
    return (
        <div className="album-container">
            <div className="album-card">
                <img src={album['im:image'][2].label} alt={album.title.label} />
                <div className="album-text-overlay">
                    <div className="album-title">{album.title.label}</div>
                </div>
                <div className={`favorite-icon${isFavorited ? ' active' : ''}`} onClick={handleFavoriteClick}>
                    {isFavorited ? '♥' : '♡'} 
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;