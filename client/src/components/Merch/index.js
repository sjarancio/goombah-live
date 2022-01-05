import React from 'react';
import "./Merch.css";

import Video from '../../videos/merch.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from './MerchElements';

function Merch() {

  return (
    <HeroContainer id='merch'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>MERCH</HeroH1> */}
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default Merch;
