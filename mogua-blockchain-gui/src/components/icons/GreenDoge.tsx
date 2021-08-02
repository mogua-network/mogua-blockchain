import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as MguaIcon } from './images/mogua.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={MguaIcon} viewBox="0 0 150 58" {...props} />;
}
