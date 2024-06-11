import React from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { useOrders } from '../hooks/useOrders';
import { dumyOrders } from '../dumy/dumyOrders';
import { formatDate, formatNumber } from '../utils/format';
import Button from '../components/common/Button';

const OrderList = () => {
  //const {orders} = useOrders()
  const orders = dumyOrders;
  return (
    <>
      <Title size="large">주문 내역</Title>
      <OrderListStyle>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문 일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품</th>
              <th>수령</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{formatDate(el.createAt)}</td>
                <td>{el.address}</td>
                <td>{el.receiver}</td>
                <td>{el.contact}</td>
                <td>{el.bookTitle}</td>
                <td>{el.totalQuantity}권</td>
                <td>{formatNumber(el.totalPrice)}원</td>
                <td>
                  <Button size="small" scheme="normal">
                    자세히 보기
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </OrderListStyle>
    </>
  );
};

const OrderListStyle = styled.div``;

export default OrderList;
