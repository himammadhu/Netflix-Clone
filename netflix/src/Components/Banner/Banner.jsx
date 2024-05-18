import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner '>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
