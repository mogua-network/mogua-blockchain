import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { MoGua } from '@mogua/icons';

const StyledGreenDoge = styled(MoGua)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledGreenDoge />
    </Box>
  );
}
