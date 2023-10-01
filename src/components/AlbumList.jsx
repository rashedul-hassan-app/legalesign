import React, { useEffect, useState } from 'react';
import { getTop50Albums } from '../services/itunesServices';

const AlbumList = () => {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchReq = await getTop50Albums();
            setAlbums(fetchReq);
            console.log(fetchReq);
        }
        
        fetchData();
    }, []);

    if (!albums) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>Album List</div>
            {/* render each album's title as an example */}
            <ul>
            {albums.map(album => <li key={album.id.attributes['im:id']}>{album.title.label}</li>)}
            </ul>
        </div>
    );
}

export default AlbumList;
