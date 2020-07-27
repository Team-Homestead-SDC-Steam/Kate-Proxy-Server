import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from './UIUXUtils';

const Dropdown = styled.div`
  #${props => props.theme.rootId} & {
    position: absolute;
    left: 1px;
    top: 64px;
    background: #171a21;
    max-width: 132px;
    padding: 5px 15px 10px;
    box-shadow: 3px 3px 5px -3px #000;
    text-align: left;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
  }
`;

const HoverNavLink = styled(NavLink)`
  #${props => props.theme.rootId} & {
    position: relative;
    :hover {
      ${Dropdown} {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;

const DropdownItem = styled.div`
  #${props => props.theme.rootId} & {
    position: relative;
    text-transform: uppercase;
    font-size: 11px;
    color: #b8b6b4;
    padding: 6px 10px 6px 0;
    :hover {
      color: #fff;
    }
  }
`;

const DropdownNavLink = ({ title, dropdownContents }) => {
  return (
    <HoverNavLink>
      {title}
      <Dropdown>
        {
          dropdownContents.map((item, idx) => <DropdownItem key={idx}>{item}</DropdownItem>)
        }
      </Dropdown>
    </HoverNavLink>
  );
};

DropdownNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownContents: PropTypes.array.isRequired
}

export default DropdownNavLink;
