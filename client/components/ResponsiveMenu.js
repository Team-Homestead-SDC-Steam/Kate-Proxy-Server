import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResponsiveMenuItem from './ResponsiveMenuItem';
import { Logo, MenuItem } from './UIUXUtils';

/**
 * STYLED COMPONENTS
 */
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  pointer-events: none;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.5s ease-in-out;
`;

const ResponsiveMenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${props => props.open ? '0px' : '-280px'};
  z-index: 301;
  transition: left 0.5s ease-in-out;
  overflow: hidden;
`;

const ResponsiveWrapper = styled.div`
  font-size: 22px;
  position: relative;
  min-height: 100%;
  width: 280px;
  background: #171a21;
`;

const MenuSmallItem = styled(MenuItem)`
  color: #8a8a8a;
  border: none;
  ${props => props.firstSmallMenuItem ? 'border-top: 1px solid #2f3138;' : ''}
  font-size: 0.75em;
`;

const MenuFooter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 10px;
  white-space: normal;
  color: #8a8a8a;
  padding: 0 12px 24px 12px;
`;

const FooterLink = styled.span`
  cursor: pointer;
`;

/**
 * MAIN COMPONENT
 */
const ResponsiveMenu = ({ open }) => {
  const footerLinks = ['Privacy Policy', 'Legal', 'Steam Subscriber Agreement', 'Refunds'];
  const [storeMenuOpen, setStoreMenuOpen] = useState(false);
  const [communityMenuOpen, setCommunityMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <Backdrop visible={open} />
      <ResponsiveMenuContainer open={open}>
        <ResponsiveWrapper>
          <MenuItem>Login</MenuItem>
          <ResponsiveMenuItem
            menuTitle='Store'
            isOpen={storeMenuOpen}
            toggleOpen={() => { setStoreMenuOpen(!storeMenuOpen); setCommunityMenuOpen(false); }}
            height='163px'
            subMenuItems={['Featured', 'Wishlist', 'News', 'Stats']}
          />
          <ResponsiveMenuItem
            menuTitle='Community'
            isOpen={communityMenuOpen}
            toggleOpen={() => { setCommunityMenuOpen(!communityMenuOpen); setStoreMenuOpen(false); }}
            height='204px'
            subMenuItems={['Home', 'Discussions', 'Workshop', 'Market', 'Broadcasts']}
          />
          <MenuItem>Support</MenuItem>
          <MenuSmallItem firstSmallMenuItem>Change language</MenuSmallItem>
          <MenuSmallItem>View desktop website</MenuSmallItem>
          <MenuFooter>
            <Logo src="https://steamstore-a.akamaihd.net/public/shared/images/responsive/logo_valve_footer.png" isFooter />
            <div>
              &copy; Valve Corporation. All rights reserverd. All trademarks are property of their respective owners in the US and other countries.&nbsp;
                  {
                footerLinks.map((link, idx) => <FooterLink key={idx}>{link}{idx === footerLinks.length - 1 ? '' : ' | '}</FooterLink>)
              }
            </div>

          </MenuFooter>
        </ResponsiveWrapper>
      </ResponsiveMenuContainer>
    </React.Fragment>
  );
};

ResponsiveMenu.propTypes = {
  open: PropTypes.bool
}

export default ResponsiveMenu;