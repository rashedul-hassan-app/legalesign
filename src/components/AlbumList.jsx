import React, { useEffect, useState } from 'react';
import { getTop50Albums } from '../services/itunesServices';
import AlbumCard from './AlbumCard';
import SearchBar from './SearchBar';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchReq = await getTop50Albums();
            setAlbums(fetchReq);
        }
        
        fetchData();
    }, []);

    // Ensure albums is not null before filtering
    const filteredAlbums = albums && albums.filter(album => 
        album.title.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!albums.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="album-headline">Hi!</div>
            <SearchBar onSearch={setSearchTerm} />
            <div className="album-list">
                {filteredAlbums.map(album => 
                    <AlbumCard key={album.id.attributes['im:id']} album={album} />
                )}
            </div>
        </div>
    );
}

export default AlbumList;
