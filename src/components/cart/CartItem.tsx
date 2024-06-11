import React, { useMemo } from 'react';
import styled from 'styled-components';
import { TCart } from '../../model/cart.model';
import Title from '../common/Title';
import Button from '../common/Button';
import { formatNumber } from '../../utils/format';
import CheckIconBtn from './CheckIconBtn';

interface TProps {
  cart: TCart;
  checkedItems: number[];
  onCheck: (id: number) => void;
}

const CartItem = ({ cart, checkedItems }: TProps) => {
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  return (
    <CartItemStyle>
      <div className="info">
        <CheckIconBtn isChecked={isChecked} onClick={() => {}}></CheckIconBtn>
        <div>
          <Title size="medium">{cart.title}</Title>
          <p className="summary">{cart.summary}</p>
          <p className="pricee">{formatNumber(cart.price)} 원</p>
          <p className="quantity">{cart.quantity} 권</p>
        </div>
      </div>
      <Button size="medium" scheme="normal">
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.div``;

export default CartItem;
