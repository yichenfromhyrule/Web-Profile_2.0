import React from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';


function Home() {
  const sliderSettings = {
    arrows: false,
    dots: true
  };
  return (
    <div>
      <div className='sliderContainer'>
        <Slider {...sliderSettings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
      <div className='home'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
