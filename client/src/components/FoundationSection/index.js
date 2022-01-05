import React from 'react';
import "./Foundation.css";

import Video from '../../videos/foundation.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from './FoundationElements';

function Foundation() {

  return (
    <HeroContainer id='foundation'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>Foundation</HeroH1> */}
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default Foundation;
