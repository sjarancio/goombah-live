import React from 'react';
import {
  FaDiscord,
  FaYoutube
} from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import "./Footer.css";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems> */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
              <FooterLink to='/'>S</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Associates</FooterLinkTitle>
              <a class="links" href="https://www.cryptofal.com/">Crypto FAL</a>
              <a class="links" href="https://spine3d.com/">Spine 3D</a>
              <a class="links" href="https://www.nougatugames.com">Nougatu Games</a>
              <a class="links" href="https://thedaydream.agency">Daydreaming Agency</a>
              <a class="links" href="https://coinbound.io/">Coinbound</a>
              {/* <FooterLink ><a class="links" href="https://www.cryptofal.com/">Crypto FAL</a></FooterLink> */}
              {/* <FooterLink ><a class="links" href="https://spine3d.com/">Spine 3D</a></FooterLink> */}
              {/* <FooterLink href='/'>Nougatu Games</FooterLink> */}
              {/* <FooterLink ><a class="links" href="https://www.instagram.com/daydreamingagency/?hl=en">Daydreaming Agency</a></FooterLink> */}
              {/* <FooterLink ><a class="links" href="https://coinbound.io/">Coinbound</a></FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <SocialIconLink href='https://discord.gg/5rkKHeKAvj' target='_blank' aria-label='Discord'>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/channel/UCMPZ67AoF7NxfP7ozj44xNg/featured' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              {/* <FooterLink to='/'>Twitter</FooterLink> */}
              {/* <FooterLink href='https://discord.com/invite/TzJQAtmj'>Discord</FooterLink> */}
              {/* <FooterLink to='/'>Instagram</FooterLink> */}
              {/* <FooterLink to='/'>Youtube</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              The Goombahs
            </SocialLogo>
            <WebsiteRights>The Goombahs © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              {/* <SocialIconLink href='https://discord.com/invite/TzJQAtmj' target='_blank' aria-label='Discord'>
                <FaDiscord />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink> */}
              {/* <SocialIconLink
                href='//www.youtube.com/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink> */}
              {/* <SocialIconLink
                target='_blank'
                aria-label='Instagram'
                href='//www.Instagram.com/'
              >
                <FaInstagram />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
