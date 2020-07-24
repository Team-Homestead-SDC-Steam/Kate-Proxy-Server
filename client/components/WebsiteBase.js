import React, { useState, useEffect } from 'react';
import {
  TopPadBody,
  BackgroundImage,
  BackgroundGlow,
  PhotosAndDesc,
  PhotoCarousel,
  DescAndTags,
  GameDescription,
  UserTags,
  TitleBar,
  GameTitle,
  CommunityHubBtn,
  SignInNotice,
  HoverSpan,
  PageContent,
  Columns,
  LeftCol,
  RightCol,
} from './CssComponents';
import GlobalHeader from './GlobalHeader';
import SubNavBar from './SubNavBar';
import Breadcrumbs from './Breadcrumbs';
import { fetchGameTitle, getPathId } from '../utils';

const WebsiteBase = () => {
  const [gameTitle, setGameTitle] = useState('');

  // On component mount, get game title
  useEffect(() => {
    let gameid = getPathId();
    fetchGameTitle(gameid)
      .then(res => {
        if (res.error) {
          throw new Error(res.error);
        }
        setGameTitle(res[0].gameTitle);
      })
      .catch(e => {
        console.error(e);
        setGameTitle('Untitled Steam Game');
      })
  }, []);

  return (
    <React.Fragment>
      <GlobalHeader />
      <BackgroundImage>
        <TopPadBody>
          <SubNavBar />
          <Breadcrumbs gameTitle={gameTitle} />
          <TitleBar>
            <GameTitle>{gameTitle}</GameTitle>
            <CommunityHubBtn>Community Hub</CommunityHubBtn>
          </TitleBar>
          <BackgroundGlow>
            <PhotosAndDesc>
              <PhotoCarousel id="photo-carousel" />
              <DescAndTags>
                <GameDescription id="game-description" />
                <UserTags id="user-tags" />
              </DescAndTags>
            </PhotosAndDesc>
          </BackgroundGlow>
          <SignInNotice>
            <HoverSpan>Sign in</HoverSpan> to add this item to your wishlist, follow it, or mark it as not interested.
          </SignInNotice>
          <PageContent>
            <Columns>
              <LeftCol>
                <div id="dlc"></div>
                <div id="system-requirements"></div>
                <div id="related-games"></div>
              </LeftCol>
              <RightCol>
              </RightCol>
            </Columns>
            <div id="reviews-graph"></div>
            <div id="reviews"></div>
          </PageContent>
        </TopPadBody>
      </BackgroundImage>
    </React.Fragment>
  );
}

export default WebsiteBase;
