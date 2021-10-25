import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  width: calc(100vw - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.black};
  border-radius: 5px;
  box-shadow: 3px 3px 10px ${colors.shadow};
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
`;
