import React from 'react';
import { MdOutlineMenu, MdOutlineInfo } from 'react-icons/md';
import { Title } from '../Title';
import { SubTitle } from '../SubTitle';

import { Container, ContainerTexts } from './styles';
import colors from '../../styles/colors';

export function Header(): JSX.Element {
  return (
    <Container>
      <MdOutlineMenu size={50} color={colors.blue} cursor="pointer" />
      <ContainerTexts>
        <Title text="Biblioteca de coponentes" />
        <SubTitle text="Tudo aqui é componentizado!" italic />
      </ContainerTexts>
      <MdOutlineInfo size={40} color={colors.blue} cursor="pointer" />
    </Container>
  );
}
