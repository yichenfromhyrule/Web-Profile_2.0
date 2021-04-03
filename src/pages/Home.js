import React from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';
import HomeSlider from './../components/HomeSlider/HomeSlider';
import image1 from './../images/sliderImg/image1.jpg';
import SectionInfo from './../components/SectionInfo/SectionInfo';


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
        <SectionInfo 
          title = "Algorithms"
          description = "some description"
        />
        <SectionInfo 
          title = "Digital Paintings"
          description = "some description"
        />
      </div>
    </div>
  );
}

export default Home;
