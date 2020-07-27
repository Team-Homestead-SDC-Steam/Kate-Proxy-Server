import React, { useState } from 'react';
import styled from 'styled-components';
import ResponsiveMenu from './ResponsiveMenu';
import DropdownNavLink from './DropdownNavLink';
import { Logo, NavLink } from './UIUXUtils';

const Header = styled.div`
  #${props => props.theme.rootId} & {
    background: #171a21;
    position: relative;
    left: 0;
    right: 0;
    min-width: 940px;
    font-size: 14px;
    padding: 0 16px;
    margin: 0 auto;
    z-index: 200;
  }
`;

const MobileMenuDisplay = styled.div`
  #${props => props.theme.rootId} & {
    display: none;
    @media screen and (max-width: 940px) {
      display: flex;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #171a21;
      text-align: center;
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
      overflow: hidden;
      padding: 13px 8px;
    }
  }
`;

const SideMenuButton = styled.img`
  #${props => props.theme.rootId} & {
    height: 31px;
    padding-top: 2px;
    cursor: pointer;
    position: absolute;
  }
`;

const DesktopMenuDisplay = styled.div`
  #${props => props.theme.rootId} & {
    display: none;
    position: relative;
    @media screen and (min-width: 940px) {
      display: flex;
      width: 940px;
      height: 104px;
      margin: 0 auto;
    }
  }
`;

const NavLinkContainer = styled.div`
  #${props => props.theme.rootId} & {
    padding-left: 0px;
    display: flex;
    position: relative;
  }
`;

const GlobalActions = styled.div`
  #${props => props.theme.rootId} & {
    position: absolute;
    right: 0;
    top: 6px;
    height: 21px;
    line-height: 21px;
    color: #b8b6b4;
    font-size: 11px;
  }
`;

const ActionsLinks = styled.div`
  #${props => props.theme.rootId} & {
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
  }
`

const InstallButton = styled(ActionsLinks)`
  #${props => props.theme.rootId} & {
    height: 24px;
    line-height: 24px;
    margin-right: 3px;
    color: #e5e4dc;
    padding-left: 35px;
    padding-right: 9px;
    background-color: #5c7e10;
    background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/header/btn_header_installsteam_download.png?v=1);
    background-repeat: no-repeat;
    background-position: 10px 5px;
    &:hover {
      color: #fff;
    }
  }
`;

const LoginLink = styled(ActionsLinks)`
  #${props => props.theme.rootId} & {
    padding: 0 9px;
  }
`;

const LanguageLink = styled(ActionsLinks)`
  #${props => props.theme.rootId} & {
    padding: 0 23px 0 9px;
    background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/popups/btn_arrow_down_padded.png);
    background-position: right center;
    background-repeat: no-repeat;
  }
`;

const GlobalHeader = () => {
  const [responsiveOpen, setResponsiveOpen] = useState(false);

  const openMenuAddClickListener = () => {
    setResponsiveOpen(true);
    // Disable scroll when mobile side menu is open
    document.body.style.overflowY = 'hidden';
    document.addEventListener('click', closeMenuRemoveClickListener);
  };

  const closeMenuRemoveClickListener = (event) => {
    // If mouse click's x position is larger than width of responsive menu (280px), close
    // side menu, remove event listener, and restore previous styling (allow scroll)
    if (event.pageX > 280) {
      setResponsiveOpen(false);
      document.body.style.overflowY = 'auto';
      document.removeEventListener('click', closeMenuRemoveClickListener);
    }
  };

  return (
    <React.Fragment>
      <ResponsiveMenu open={responsiveOpen} />
      <Header className="emphasis-font">
        <MobileMenuDisplay>
          <SideMenuButton
            onClick={openMenuAddClickListener}
            src="https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_menu_hamburger.png"
          />
          <Logo
            src="https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_logo.png"
            alt="Steam Logo Mobile"
            isMobile
          />
        </MobileMenuDisplay>

        <DesktopMenuDisplay>
          <Logo src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" alt="Steam Logo Desktop" />
          <NavLinkContainer>
            <DropdownNavLink
              title='Store'
              dropdownContents={['Featured', 'Wishlist', 'News', 'Stats']}
            />
            <DropdownNavLink
              title='Community'
              dropdownContents={['Home', 'Discussions', 'Workshop', 'Market', 'Broadcasts']}
            />
            <NavLink>About</NavLink>
            <NavLink>Support</NavLink>
          </NavLinkContainer>
          <GlobalActions>
            <InstallButton>Install Steam</InstallButton>
            <LoginLink>login</LoginLink>
          &nbsp;|&nbsp;
          <LanguageLink>language</LanguageLink>
          </GlobalActions>
        </DesktopMenuDisplay>
      </Header>
    </React.Fragment>
  );
};

export default GlobalHeader;
