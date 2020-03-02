import React from 'react';
import styled from '@emotion/styled';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderWrapper = styled.div`
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Spinner = ({ show = false }) => {
  if (!show) return null;
  return (
    <LoaderWrapper>
      <Dimmer active inverted>
        <Loader size="large">Loading</Loader>
      </Dimmer>
    </LoaderWrapper>
  );
};

export default Spinner;
