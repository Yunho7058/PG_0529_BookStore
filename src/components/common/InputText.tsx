import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface TProps {
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: any) => void;
}
const InputText = React.forwardRef(
  (
    { placeholder, type, value, onChange }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Back
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
        onChange={(e) => onChange}
      ></Back>
    );
  }
);

const Back = styled.input.attrs(({ type }) => ({ type: type || 'text' }))`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;

export default InputText;
