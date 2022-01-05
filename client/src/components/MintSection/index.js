import React from 'react';
import "./Mint.css";

import Video from '../../videos/mint.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  // HeroH1
} from './MintElements';

function Mint() {

  return (
    <HeroContainer id='mint'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
      <h1 class="mint-msg">Meet The Goombahs</h1>
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default Mint;
