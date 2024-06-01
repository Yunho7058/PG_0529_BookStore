import styled, { Styled } from 'styled-components';
import { ColorKey, HeadingSize } from '../../style/theme';

interface TProps {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

const Title = (props: TProps) => {
  return (
    <Back size={props.size} color={props.color}>
      {props.children}
    </Back>
  );
};
const Back = styled.h1<Omit<TProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

export default Title;
