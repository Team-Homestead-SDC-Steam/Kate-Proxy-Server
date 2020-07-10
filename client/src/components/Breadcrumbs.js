import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BreadcrumbsWrapper = styled.div`
  color: #56707f;
  font-size: 12px;
  font-family: "Roboto", Sans-serif;
  padding-top: 10px;
  margin: 0 auto;
  max-width: 940px;
`;

const LabelSpan = styled.span`
  color: #8f98a0;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;

const Breadcrumbs = ({ gameTitle }) => {
  return (
    <BreadcrumbsWrapper>
      <LabelSpan>All Games</LabelSpan>
      &nbsp;&gt;&nbsp;
      <LabelSpan>{gameTitle}</LabelSpan>
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  gameTitle: PropTypes.string.isRequired
};

export default Breadcrumbs;