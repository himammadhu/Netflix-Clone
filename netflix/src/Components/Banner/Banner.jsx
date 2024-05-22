import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import { API_KEY, imageUrl } from '../../Constants/Constant';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response);
        if (response.data && response.data.results && response.data.results.length > 0) {
          setMovie(response.data.results[0]);
        } else {
          console.error("No results found");
        }
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, []);

  const backgroundImageUrl = movie ? `${imageUrl}${movie.backdrop_path}` : '';

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='banner'>
        <div className="content">
          <h1 className='title'>{movie ? movie.title : ""}</h1>
          <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
