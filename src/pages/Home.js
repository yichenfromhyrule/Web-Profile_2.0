import React from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';
import HomeSlider from './../components/HomeSlider/HomeSlider';


function Home() {
  const sliderSettings = {
    arrows: false,
    dots: true
  };
  return (
    <div>
      <div>
        <Slider {...sliderSettings}>
          <div>
            <HomeSlider />
          </div>
          <div>
            <div className='sliderComponent1'>
              <h3>2</h3>
            </div>
          </div>
          <div>
            <div className='sliderComponent1'>
              <h3>3</h3>
            </div>
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
