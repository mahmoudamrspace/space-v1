import * as React from "react";
import "../components/sky.css";

const Sky = () => (
  <div id='sky'>
    {/* Far layer - background stars (many small stars) */}
    <span className='star-layer far'>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
    {/* Mid layer - medium stars */}
    <span className='star-layer mid'>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
    {/* Near layer - foreground stars (bright, larger) */}
    <span className='star-layer near'>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
    {/* Twinkling stars layer */}
    <span className='star-layer twinkle'>
      <s className='twinkle-star'></s>
      <s className='twinkle-star'></s>
      <s className='twinkle-star'></s>
      <s className='twinkle-star'></s>
      <s className='twinkle-star'></s>
    </span>
    {/* Shooting stars - rare, random appearances with smooth motion */}
    <div className='shooting-star' style={{ '--delay': '12s', '--duration': '3.5s', '--start-x': '10%', '--start-y': '20%', '--move-x': '80vw', '--move-y': '60vh' } as React.CSSProperties}></div>
    <div className='shooting-star' style={{ '--delay': '45s', '--duration': '4s', '--start-x': '80%', '--start-y': '5%', '--move-x': '-60vw', '--move-y': '90vh' } as React.CSSProperties}></div>
    <div className='shooting-star' style={{ '--delay': '78s', '--duration': '3.8s', '--start-x': '50%', '--start-y': '0%', '--move-x': '0vw', '--move-y': '100vh' } as React.CSSProperties}></div>
    <div className='shooting-star' style={{ '--delay': '115s', '--duration': '4.2s', '--start-x': '15%', '--start-y': '30%', '--move-x': '70vw', '--move-y': '40vh' } as React.CSSProperties}></div>
    <div className='shooting-star' style={{ '--delay': '152s', '--duration': '3.6s', '--start-x': '70%', '--start-y': '15%', '--move-x': '-40vw', '--move-y': '70vh' } as React.CSSProperties}></div>
  </div>
);

export default Sky;
