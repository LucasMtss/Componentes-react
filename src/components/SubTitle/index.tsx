import React from 'react';
import { Text } from './styles';

interface IProps {
  text: string;
  italic?: boolean;
  bold?: boolean;
}

export function SubTitle({ text, italic, bold }: IProps): JSX.Element {
  return (
    <Text italic={italic || false} bold={bold || false}>
      {text}
    </Text>
  );
}
