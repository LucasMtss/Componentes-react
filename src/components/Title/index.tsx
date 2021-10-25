import React from 'react';
import { Text } from './styles';

interface IProps {
  text: string;
}

export function Title({ text }: IProps): JSX.Element {
  return <Text>{text}</Text>;
}
