import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface TProps {
  placeholder?: string;
}
const InputText = React.forwardRef(
  ({ placeholder }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <Back placeholder={placeholder} ref={ref}></Back>;
  }
);

const Back = styled.input.attrs({ type: 'text' })`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;

export default InputText;
