import React from 'react';
import "./Portal.css";

import Video from '../../videos/portal.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1
} from './PortalElements';

function Portal() {

  return (
    <HeroContainer id='portal'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 class="portal-message">Join Us in the Metaverse 2022!</h1>
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        
      </HeroContent>
    </HeroContainer>
  );
}

export default Portal;
