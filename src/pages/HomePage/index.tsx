import React from 'react';
import { Container } from './styles';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';

export function HomePage(): JSX.Element {
  return (
    <Container>
      <Title text="Biblioteca de coponentes" />
      <SubTitle text="Tudo aqui é componentizado!" italic />
    </Container>
  );
}
