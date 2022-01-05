import React from 'react';
import "./Family.css";

import Video from '../../videos/family.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from './FamilyElements';

function Family() {

  return (
    <HeroContainer id='goombahs'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <br/>
        {/* <HeroH1>The Family</HeroH1> */}
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default Family;
