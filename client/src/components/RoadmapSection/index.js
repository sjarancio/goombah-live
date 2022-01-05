import React from 'react';
import "./Roadmap.css";

import Video from '../../videos/timeline.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from './RoadmapElements';

function Roadmap() {

  return (
    <HeroContainer id='roadmap'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>Roadmap</HeroH1> */}
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default Roadmap;
