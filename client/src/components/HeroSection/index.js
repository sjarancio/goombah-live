import React, { useState } from 'react';
import "./Subscribe.css";

import Video from '../../videos/main.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  // HeroP,
  // HeroH1
} from './HeroElements';

function HeroSection() {
  const [email, setEmail] =useState("")
  const [form, setForm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      fetch(`/api/memberAdd?email=${email}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }

    setEmail('')
    setForm("Thank you for joining!")
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <br/><br/><br/>
        <h1 class="goombah-h">The Goombahs</h1>
          <h3 class="goombah-p">
          Potresti alzarti. With two words, a meeting concludes and the heads of the Five Families rise to pay their respects to the Godfather Luciano “The Legend” Mongelli. For decades he has served as capo di tutti i capi and safeguarded the future of the Five Families of New York . Unlike the warring families before them, the truce was solidified by a strategic division of power, ensuring not one family held a stronger advantage. Unfortunately, this long running peace is about to change and a power struggle is on the horizon between the families.
          </h3>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        {/* <h1 class="goombah-q">Join The Family</h1> */}
        {/* <HeroH1>Join The Family</HeroH1> */}
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        <form class="subscribe" onSubmit={handleSubmit}>
          <input className="subscribe-email" name="email" type="email" placeholder="goombah@gmail.com" onChange={handleChange} value={email}/>
          <button className="subscribe-button" type="submit" >
            Join The Family
          </button>

        </form>
        <div class="success-m">{form}</div>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
