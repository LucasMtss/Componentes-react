import styled from 'styled-components';

interface IProps {
  bold: boolean;
  italic: boolean;
}

export const Text = styled.p<IProps>`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  background: rgb(61, 177, 127);
  font-style: ${(props) => (props.italic ? 'italic' : 'none')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  background-image: linear-gradient(
    180deg,
    rgba(61, 177, 127, 1) 0%,
    rgba(84, 182, 165, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
