import React from 'react';
import './ProductSection.css';


function ProductSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  linkto,
  buttonName
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <p className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </p>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <a href={linkto}
                rel="noopener noreferrer" 
                target='_blank'
                >
                <button>{buttonName}</button>
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;