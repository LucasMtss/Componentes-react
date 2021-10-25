import React, { ReactNode } from 'react';
import { Header } from '../../components/Header';
import { Container, Content } from './styles';

interface IProps {
  children?: ReactNode;
}

export function DefaultPage({ children }: IProps): JSX.Element {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
