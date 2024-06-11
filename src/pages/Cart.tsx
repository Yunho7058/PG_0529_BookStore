import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { carts, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const totalPrice = useMemo(() => {}, [carts, checkedItems]);
  const handleOrder = () => {
    if (checkedItems.length === 0) {
      alert('주문할 상품을 선택해 주세요.');
      return;
    }
    //. 주문 액션 -> 주문서 작성으로 데이터 전달
    // const orderData: Omit<OrderSheet, "delivery" = {
    //   items: checkedItems,
    //   totalPrice, totalQuantity,
    //   firstBookTitle: carts[0].title,
    // };
    //navigate("/order", { state: orderData});
  };
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((el) => (
            <CartItem
              key={el.id}
              cart={el}
              checkedItems={checkedItems}
              onCheck={() => {}}
            ></CartItem>
          ))}
        </div>
        <div className="summary">summary</div>
      </CartStyle>
    </>
  );
};

export const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .order-info {
    h1 {
      padding: 0 0 24px 0;
    }
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;
      display: flex;
      justify-content: start;
      gap: 8px;
      label {
        width: 80px;
      }
      .input {
        flex: 1;
        input {
          width: 100%;
        }
      }
    }
    .error-text {
      color: red;
      margin: 0px;
      padding: 0 0 12px 0;
      text-align: center;
    }
  }
`;

export default Cart;
