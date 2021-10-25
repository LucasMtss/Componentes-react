import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${colors.graphite};

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  padding-top: 2rem;
  width: 100%;
  min-height: calc(100vh - 12rem);

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
