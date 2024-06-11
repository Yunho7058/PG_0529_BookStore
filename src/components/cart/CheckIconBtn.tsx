import React from 'react';
import styled from 'styled-components';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
interface TProps {
  isChecked: boolean;
  onClick: () => void;
}

const CheckIconBtn = ({ isChecked, onClick }: TProps) => {
  return (
    <CheckIconBtnStyle onClick={onClick}>
      {isChecked ? <FaRegCircle /> : <FaRegCheckCircle />}
    </CheckIconBtnStyle>
  );
};

const CheckIconBtnStyle = styled.div``;

export default CheckIconBtn;
