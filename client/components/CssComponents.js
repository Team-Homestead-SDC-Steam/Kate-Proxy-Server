import styled from 'styled-components';

export const TopPadBody = styled.div`
  #${props => props.theme.rootId} & {
    margin: 0 auto;

    @media screen and (max-width: 940px) {
      padding-top: 72px;
    }
  }
`;

export const BackgroundImage = styled.div`
  #${props => props.theme.rootId} & {
    background-image: url(https://steamcdn-a.akamaihd.net/steam/apps/289070/page_bg_generated_v6b.jpg?t=1590082071);
    background-position: center top;
    background-repeat: no-repeat;
    min-width: 972px;
  }
`;

export const BackgroundGlow = styled.div`
  #${props => props.theme.rootId} & {
    background: url(https://steamstore-a.akamaihd.net/public/images/v6/app/game_page_background_shadow.png?v=2);
    background-position: bottom;
    padding-bottom: 1px;
    background-repeat: no-repeat;
    margin: 0 auto;

    @media screen and (max-width: 940px) {
      background-size: cover;
    }
  }
`;

export const PhotosAndDesc = styled.div`
  #${props => props.theme.rootId} & {
    width: 940px;
    height: 429px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
    background: -moz-linear-gradient(left, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(50%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.4)));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0) 50%,rgba(0,0,0,0.4) 100%);
    background: -o-linear-gradient(left, rgba(0,0,0,0) 50%,rgba(0,0,0,0.4) 100%);
    background: -ms-linear-gradient(left, rgba(0,0,0,0) 50%,rgba(0,0,0,0.4) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0) 50%,rgba(0,0,0,0.4) 100%);

    @media screen and (max-width: 940px) and (min-width: 470px) {
      width: 96vw;
      height: auto;
      max-width: 940px;
      margin: 0 2vw;
      flex-direction: column;
    }

    @media screen and (max-width: 470px) {
      flex-direction: column;
    }
  }
`;

export const PhotoCarousel = styled.div`
  #${props => props.theme.rootId} & {
    width: 616px;
    max-width: 750px;
    font-size: 16px;

    @media screen and (max-width: 940px) {
      width: auto;
    }
  }
`;

export const DescAndTags = styled.div`
  #${props => props.theme.rootId} & {
    display: flex;
    flex-direction: column;
  }
`;

export const GameDescription = styled.div`
  #${props => props.theme.rootId} & {
    width: 324px;

    @media screen and (max-width: 940px) and (min-width: 470px) {
      width: auto;
      height: auto;
    }

    @media screen and (min-width: 470px) {
      width: 324px;
    }
  }
`;

export const UserTags = styled.div`
  #${props => props.theme.rootId} & {
    position: absolute;
    bottom: 24px;
    left: 0;
  }
`;

export const TitleBar = styled.div`
  #${props => props.theme.rootId} & {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 940px;

    @media screen and (max-width: 940px) {
      width: auto;
    }
  }
`;

export const GameTitle = styled.div`
  #${props => props.theme.rootId} & {
    text-align: left;
    min-height: 46px;
    font-size: 26px;
    line-height: 32px;
    text-overflow: ellipsis;
    font-family: 'Roboto', sans-serif;
  }
`;

export const CommunityHubBtn = styled.div`
  #${props => props.theme.rootId} & {
    border-radius: 2px;
    padding: 1px 16px;
    font-size: 15px;
    line-height: 30px;
    height: 30px;
    display: inline-block;
    cursor: pointer;
    color: #67c1f5;
    background: rgba(103, 193, 245, 0.2);
    :hover {
      color: #fff;
      background: #417a9b;
      background: -webkit-linear-gradient(150deg, #417a9b 5%,#67c1f5 95%);
      background: linear-gradient(-60deg, #417a9b 5%,#67c1f5 95%);
    }
  }
`;

export const SignInNotice = styled.div`
  #${props => props.theme.rootId} & {
    width: 940px;
    margin-bottom: 16px;
    background: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
  }
`;

export const HoverSpan = styled.span`
  #${props => props.theme.rootId} & {
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    :hover {
      color: #66c0f4;
    }
  }
`;

export const PageContent = styled.div`
  #${props => props.theme.rootId} & {
    width: 940px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Columns = styled.div`
  #${props => props.theme.rootId} & {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const LeftCol = styled.div`
  #${props => props.theme.rootId} & {
    width: 616px;
    font-size: 14px;
    color: #acb2b8;
    margin-top: 16px;
  }
`;

export const RightCol = styled.aside`
  #${props => props.theme.rootId} & {
    margin-top: 16px;
    overflow: hidden;
    width: 308px;
    margin-left: 14px;
    font-family: inherit;
  }
`;
