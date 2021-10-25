import styled from 'styled-components';
import colors from '../../styles/colors';

interface IProps {
  bold: boolean;
  italic: boolean;
}

export const Text = styled.p<IProps>`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  background: ${colors.green};
  font-style: ${(props) => (props.italic ? 'italic' : 'none')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  background-image: linear-gradient(${colors.gradient});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
