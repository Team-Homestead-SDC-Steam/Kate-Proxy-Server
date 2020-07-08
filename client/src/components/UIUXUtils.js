import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
  stroke: #bdbdbd;
  stroke-width: 3;
  stroke-linecap: square;
  stroke-linejoin: square;
  fill: none;
  position: absolute;
  right: 12px;
  top: calc(50% - 6.5px);
  ${props => props.isActive ? 'transform: rotate( 180deg );' : ''}
  transition: transform 0.2s ease-in-out;
`;

// Mobile side menu down/up arrow
export const ChevronDownIcon = ({ isActive }) => (
  <SVG width='20' height='13' isActive={isActive}>
    <polyline points='3 3, 10 10, 17 3'></polyline>
  </SVG>
);

ChevronDownIcon.propTypes = {
  isActive: PropTypes.bool
};

// Steam / Valve logos - different styling for mobile menu vs. desktop menu
export const Logo = styled.img`
  cursor: ${props => props.isFooter ? 'default' : 'pointer'};
  padding-top: ${props => props.isMobile ? '0' : '30px'};
  margin-right: ${props => props.isMobile ? '0' : '25px'};
  width: ${props => props.isMobile ? 'auto' : (props.isFooter ? '92px' : '176px')};
  height: ${props => props.isMobile ? '36px' : (props.isFooter ? '26px' : '44px')};
  ${props => props.isMobile ? 'margin: 0 auto; color: #fff' : ''};
`;

export const ThreeDBorder = styled.div`
  border-top: 1px solid #2f3138;
  border-bottom: 1px solid #000;
`;

export const MenuItem = styled(ThreeDBorder)`
  position: relative;
  color: #bdbdbd;
  font-weight: 300;
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 2.5em;
  cursor: pointer;
`;

export const NavLink = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  color: #b8b6b4;
  padding: 45px 7px 7px 7px;
  font-weight: 300;
  :hover {
    color: #fff;
  }
`;
