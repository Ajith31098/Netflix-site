import React, { useEffect, useState } from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import { imageUrl, API_KEY } from '../../constants/constant';
import axios from '../../axios';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(props.url);
                if (response.data && response.data.results) {
                    // Filter out movies that don't have a valid backdrop_path
                    const filteredMovies = response.data.results.filter(movie => movie.backdrop_path);
                    setMovies(filteredMovies);
                } else {
                    console.error("Unexpected API response structure:", response.data);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        if (props.url) {
            fetchMovies();
        } else {
            console.warn("⚠️ Warning: props.url is undefined or empty.");
        }
    }, [props.url]);

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const singleMovie = async (id) => {
        if (!id) {
            console.warn("⚠️ Skipping invalid movie ID:", id);
            return;
        }

        try {
            const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`);

            if (response.data.results && response.data.results.length > 0) {
                setUrlId(response.data.results[0].key);
            } else {
                console.warn(`⚠️ No trailer available for movie ID: ${id}`);
                setUrlId(null);
            }
        } catch (error) {
            console.error(`❌ Error fetching trailer for movie ID ${id}:`, error);
            setUrlId(null);
        }
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) => {
                    const posterUrl = `${imageUrl}${obj.backdrop_path}`;

                    return (
                        <img 
                            onClick={() => singleMovie(obj.id)} 
                            key={obj.id} 
                            className={props.isSmall ? 'smallPoster' : "poster"} 
                            src={posterUrl} 
                            alt={obj.title || "Movie Poster"} 
                            onError={(e) => {
                                console.warn(`⚠️ Skipping broken image for movie ID: ${obj.id}`);
                                e.target.style.display = 'none'; // Hide the image if it fails to load
                            }}
                        />
                    );
                })}
            </div>

            {urlId && <Youtube opts={opts} videoId={urlId} />}
        </div>
    );
}

export default RowPost;
