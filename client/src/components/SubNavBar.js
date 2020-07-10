import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from './UIUXUtils';

const Spacing = styled.div`
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  height: 66px;
  min-width: 940px;
  margin-bottom: 16px;
  z-index: 100;
`;

const NavWrapper = styled.div`
  height: 66px;
  position: relative;
  width: 940px;
  margin: 0 auto;
`;

const NavArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 24px;
  height: 49px;
`;

const NavBackground = styled.div`
  height: 35px;
  margin: 7px 0;
  background: rgba(62, 126, 167, 0.8);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  padding: 1px 23px 1px 22px;
  color: #d9dadd;
  line-height: 34px;
  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25);
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: -webkit-linear-gradient( top, #e3eaef 5%, #c7d5e0 95%);
    background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
    color: #000;
    text-shadow: 1px 1px 0px rgba( 255, 255, 255, 0.25 );
    height: 33px;
  }
`;

const DownArrow = styled.span`
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/btn_arrow_down_padded_white.png);
  width: 19px;
  height: 16px;
  padding: 0;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  vertical-align: text-bottom;
`;

const SearchArea = styled.div`
  padding: 3px 4px 2px;
  height: 30px;
`;

const SearchBox = styled.div`
  background-image: none;
  background-color: #316282;
  border-radius: 3px;
  border: 1px solid rgba( 0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgba( 255, 255, 255, 0.2);
  color: #fff;
  margin-bottom: 0px;
  outline: none;
  height: 27px;
  padding: 0px 6px;
  width: 216px;
  position: relative;
  cursor: text;
`;

const SearchInput = styled.input`
  font-size: 14px;
  margin-top: 1px;
  font-family: "Roboto", Sans-serif;
  font-weight: 300;
  font-style: italic;
  border: none;
  background-color: transparent;
  margin-left: 8px;
  width: 180px;
  outline: none;
  line-height: 26px;
  text-shadow: 1px 1px 0px rgba( 255, 255, 255, 0.1);
  color: #0e1c25;
  ::placeholder {
    color: #0e1c25;
  }
`

const SearchButton = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 1px;
  right: 1px;
  border: none;
  z-index: 200;
  color: #fff;
  cursor: pointer;
  background: #5398c3;
  border-radius: 2px;
  :hover {
    background: #63b2e0;
  }
`;

const SubNavBar = () => {
  return (
    <Spacing>
      <NavWrapper>
        <NavArea>
          <NavBackground>
            <div>
              <Tab>
                Your Store
                <DownArrow />
              </Tab>
              <Tab>
                Games
                <DownArrow />
              </Tab>
              <Tab>
                Software
                <DownArrow />
              </Tab>
              <Tab>
                Hardware
                <DownArrow />
              </Tab>
              <Tab>News</Tab>
              <Tab>Steam Labs</Tab>
            </div>
            <SearchArea>
              <SearchBox>
                <SearchInput placeholder="search the store" />
                <SearchButton><SearchIcon /></SearchButton>
              </SearchBox>
            </SearchArea>
          </NavBackground>
        </NavArea>
      </NavWrapper>
    </Spacing>
  );
};

export default SubNavBar;