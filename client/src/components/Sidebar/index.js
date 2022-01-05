import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SocialIconLink
} from './SidebarElements';

import { FaDiscord } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='mint'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Mint
          </SidebarLink>
          <SidebarLink
            to='portal'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Portal
          </SidebarLink>
          <SidebarLink
            to='roadmap'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Roadmap
          </SidebarLink>
          <SidebarLink
            to='goombahs'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            The Family
          </SidebarLink>
          <SidebarLink
            to='foundation'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Foundation
          </SidebarLink>
          <SidebarLink
            to='merch'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Merch
          </SidebarLink>
          <br/>
          <SidebarLink
            to='faq'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            FAQ
          </SidebarLink>
          <br/><br/>
          {/* <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Discord
          </SidebarLink> */}
          <SocialIconLink href='https://discord.gg/5rkKHeKAvj' target='_blank' aria-label='Discord'>
            <FaDiscord />
          </SocialIconLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
