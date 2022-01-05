import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  SocialIconLink
} from './NavbarElements';
import { FaDiscord } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              The Goombahs
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='mint'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Mint
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='portal'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Portal
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='roadmap'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Roadmap
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='goombahs'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  The Family
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='foundation'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Foundation
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='merch'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Merch
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='faq'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  FAQ   
                </NavLinks>
              </NavItem>
              <br/>
              <NavItem>
                {/* <a href="https://discord.gg/TzJQAtmj">Discord</a> */}
                {/* <NavLinks
                  to={{pathname: "https://discord.gg/TzJQAtmj"}}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discord
                </NavLinks> */}
                <br/>
                <SocialIconLink href='https://discord.gg/5rkKHeKAvj' target='_blank' aria-label='Discord'>
                  <FaDiscord />
                </SocialIconLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
