import React from 'react'
import './FeaturesBanner.css'
import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';
import image3 from '../Assets/3.png';
import image4 from '../Assets/4.png';

const FeaturesBanner = () => {
  return (
    <div className="image-gallery">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
    </div>
  )
}

export default FeaturesBanner
