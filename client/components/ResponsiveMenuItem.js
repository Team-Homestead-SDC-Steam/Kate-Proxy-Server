import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronDownIcon, MenuItem, ThreeDBorder } from './UIUXUtils';

const MenuItemWrapper = styled.div`
  transition: height 0.5s, background 0.25s, color 0.25s;
  background: ${props => props.isActive ? '#192533' : 'inherit'};
  overflow: hidden;
`;

const SubMenu = styled(ThreeDBorder)`
  height: ${props => props.isActive ? props.height : '0px'};
  ${props => props.isActive ? '' : 'border: none;'}
  transition: height 0.5s;
`;

const SubMenuItem = styled(MenuItem)`
  border: none;
  font-size: 0.75em;
  color: #fff;
  padding-left: 28px;
`;

const ResponsiveMenuItem = ({ menuTitle, isOpen, toggleOpen, height, subMenuItems }) => {
  return (
    <MenuItemWrapper isActive={isOpen}>
      <MenuItem onClick={toggleOpen}>
        {menuTitle}
        <ChevronDownIcon isActive={isOpen} />
      </MenuItem>
      <SubMenu isActive={isOpen} height={height}>
        {
          subMenuItems.map((item, idx) => <SubMenuItem key={idx}>{item}</SubMenuItem>)
        }
      </SubMenu>
    </MenuItemWrapper>
  );
};

ResponsiveMenuItem.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  subMenuItems: PropTypes.array.isRequired
}

export default ResponsiveMenuItem;