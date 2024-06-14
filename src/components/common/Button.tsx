import styled from 'styled-components';
import { ButtonScheme, ButtonSize } from '../../style/theme';

interface TProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
  // type?: string;
  // onClick?: () => void;
  //로딩상태를 보여줘서 한번에 작동만 할수 있게 한번클릭 한번 작동
}

const Button = ({ children, size, scheme, disabled, isLoading }: TProps) => {
  return (
    <Back size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
      {children}
    </Back>
  );
};

const Back = styled.button<Omit<TProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.buttonSize[size].fontSize};
  padding: ${({ theme, size }) => theme.buttonSize[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${(disabled) => (disabled ? 'auto' : 'none')};
  cursor: ${(disabled) => (disabled ? 'pointer' : 'none')};
`;

export default Button;
