// AlbumList.js

import React, { useEffect, useState } from 'react';
import { getTop50Albums } from '../services/itunesServices';
import AlbumCard from './AlbumCard'; // Import the AlbumCard component

const AlbumList = () => {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchReq = await getTop50Albums();
            setAlbums(fetchReq); // Assuming data structure from iTunes API
        }
        
        fetchData();
    }, []);

    if (!albums) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Album List</h2>
            <div className="album-list">
                {albums.map(album => <AlbumCard key={album.id.attributes['im:id']} album={album} />)}
            </div>
        </div>
    );
}

export default AlbumList;
