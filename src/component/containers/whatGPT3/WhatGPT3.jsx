import React from 'react';
import Feature from '../../feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="echolous__whatecholous section__margin" id="wecholous">
  <div className="echolous__whatecholous-feature">
    <Feature 
      title="What is Echolous" 
      text="Echolous is a pioneering platform that leverages innovative technology to dub videos into regional languages, removing language barriers and making content accessible to everyone. By transforming the way videos are dubbed, Echolous unlocks new opportunities for content creators and audiences alike." 
    />
  </div>
  <div className="echolous__whatecholous-heading">
    <h1 className="gradient__text">Broadening Horizons Through Language</h1>
  </div>
  <div className="echolous__whatecholous-container">
    <Feature 
      title="Seamless Dubbing" 
      text="Our platform provides an easy-to-use, seamless dubbing experience, making it simple to translate and dub videos into various regional languages." 
    />
    <Feature 
      title="Local Language Access" 
      text="Echolous empowers content creators to reach wider audiences by breaking down language barriers, making content more accessible and relatable to diverse viewers." 
    />
    <Feature 
      title="Innovative Technology" 
      text="With cutting-edge technology, Echolous ensures high-quality dubbing that retains the original essence and emotion of the content, while adapting it to the local linguistic and cultural context." 
    />
  </div>
</div>
);

export default WhatGPT3;
