import React from 'react';
import "./FAQ.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Video from '../../videos/faq.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1
} from './FAQElements';

function FAQ() {

  return (
    <HeroContainer id='faq'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>FAQ</HeroH1> */}
        <Accordion>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the perks of owning a Goombah?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p class="faq-answers">
                    Owning a Goombah makes you a member of the family.  

                    Attend our live and virtual events inside of the Goombah-verse.

                    Access to limited edition merchandise and metaverse wearables.

                    Access to our Metaverse , Metaverse live events, and in-person events.

                    First dibs on our future NFT collection drops , accessories and surprise weapon airdrops.

                    Ability to use our Goombahs for own personal promotions and branding.

                    Access to our first scavenger hunt, which could be in Metaverse  or IRL.

                    First invites to our DAO for community governance, charity, and live/meta event choices

                    Play our blockchain game which involves staking and mini-games to help earn coins.
                  </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    How can I contribute ideas to The Family?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p class="faq-answers">
                    Head over to the Discord, jump in on the conversation and let us know your ideas!
                  </p>
              </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        {/* <HeroH1>FAQ</HeroH1> */}
        {/* <HeroP>
          Sign up below Goooooomba
        </HeroP> */}
        <br/>
      </HeroContent>
    </HeroContainer>
  );
}

export default FAQ;
