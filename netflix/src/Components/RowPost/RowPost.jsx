import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import { imageUrl, API_KEY } from '../../Constants/Constant';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        console.error('Network error:', err);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length > 0) {
          console.log('Video ID:', response.data.results[0].key);
          setUrlId(response.data.results[0].key);
        } else {
          console.log('No videos found for this movie');
        }
      })
      .catch(err => {
        console.error('Error fetching video:', err);
      });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <div 
            key={movie.id}
            className="poster-container"
            onClick={() => handleMovie(movie.id)}
          >
            <img
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl}${movie.backdrop_path}`}
              alt={movie.name || movie.title || 'poster'}
            />
            <div className="title">{movie.name || movie.title}</div>
          </div>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
