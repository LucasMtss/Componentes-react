import styled from 'styled-components';
import colors from '../../styles/colors';

export const Text = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  background: ${colors.green};
  background-image: linear-gradient(${colors.gradient});
  font-size: 2rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
