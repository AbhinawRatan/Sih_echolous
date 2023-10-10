import React from 'react';
import people from '../../assets/people.png';
import ai2 from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h1 className='gradient__text text-xl'> Elevate Your Content with Echolous <br />Video Dubbing Platform</h1>
<p className='gradient__text2'>Transcending language barriers can be complex and tedious. <br /> Echolous provides a comprehensive suite of personalized tools <br /> to help you dub videos seamlessly.</p>


      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100+ people requested access till now</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} />
    </div>
  </div>
);

export default Header;
