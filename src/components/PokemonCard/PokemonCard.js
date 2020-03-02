import React from 'react';
import { Card } from 'semantic-ui-react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  height: 0;
  padding-bottom: 92%;
  display: block;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const PokemonCard = ({ image, title, onClick }) => (
  <Card onClick={onClick}>
    <ImageWrapper>
      <img src={image} />
    </ImageWrapper>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
  </Card>
);

export default PokemonCard;
