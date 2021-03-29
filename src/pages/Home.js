import React from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';
import HomeSlider from './../components/HomeSlider/HomeSlider';
import image1 from './../images/sliderImg/image1.jpg';


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
            <HomeSlider 
            image = {image1}
            linkTo = '/algorithms'
            title = "Algorithms"
            />
          </div>
          <div>
            <HomeSlider 
            image = {image1}
            linkTo = '/digitalpainting'
            title = "Digital Painting"
            />
          </div>
          <div>
            <HomeSlider 
            image = {image1}
            linkTo = '/about'
            title = "About"
            />
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
