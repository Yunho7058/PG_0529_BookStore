import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../utils/format';
import Title from '../common/Title';
interface TProps {
  totalQuantity: number;
  totalPrice: number;
}

const CartSummary = ({ totalQuantity, totalPrice }: TProps) => {
  return (
    <CartSummaryStyle>
      <Title size="medium" color="text">
        주문 요약
      </Title>
      총수량 : {totalQuantity} 권 총가격 : {formatNumber(totalPrice)} 원
    </CartSummaryStyle>
  );
};

const CartSummaryStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;
`;

export default CartSummary;
