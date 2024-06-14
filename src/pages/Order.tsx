import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dumyCarts, dumyCartsTotal } from '../dumy/dumyCarts';
import Title from '../components/common/Title';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import { formatNumber } from '../utils/format';
import { CartStyle } from './Cart';
import InputText from '../components/common/InputText';
import { TDelivery, TOrderSheet } from '../model/order.model';
import { useForm } from '../hooks/useForm';
import { toHaveErrorMessage } from '@testing-library/jest-dom/matchers';
import FindAddressBtn from '../components/order/FindAddressBtn';
import { fetchOrder } from '../api/order.api';

interface TDeliveryForm extends TDelivery {
  addressDetail: string;
}

// export interface TOrderSheet {
//     item: number[];
//     totalQuantity: number;
//     totalPrice: number;
//     firstBookTitle: string;
//     delivery: TDelivery;
//   }

const Order = () => {
  //const {showAlert,showCofirm} = useAlert()
  //   const location = useLocation();
  //   const orderDataFromCart = location.state;
  const navigate = useNavigate();
  const orderDumyData = dumyCarts;
  const orderDumyDataForm = {
    item: [1, 2, 3, 4],
    totalQuantity: dumyCartsTotal.totalQuantity(),
    totalPrice: dumyCartsTotal.totalPice(),
    firstBookTitle: orderDumyData[0].title,
  };
  //const {register, handleSubmit,setValue,formState:{errors}} = useForm<TDeliveryForm>()
  const handlePay = (data: TDeliveryForm) => {
    const orderData: TOrderSheet = {
      ...orderDumyDataForm,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };

    //서버로 넘겨주기
    console.log(orderData);
    // showCofirm('주문을 완료하시겠어요?',fetchOrder(orderData).then(() => {
    //     alert('주문처리완료');
    //     navigate('/orderlist');
    //   });)
  };
  return (
    <>
      <Title size="large">주문서 작성</Title>
      <OrderStyle>
        <CartStyle>
          <div className="content">
            <div className="order-info">
              <Title size="medium" color="text">
                배송정보
              </Title>
            </div>
            <div className="order-info">
              <Title size="medium" color="text">
                주문상품
              </Title>
              <form className="delivery">
                <fieldset>
                  <label>주소</label>
                  <div className="input">
                    <InputText inputType="text" />
                    {/* {...register("address",{required:true})} */}
                  </div>
                  <FindAddressBtn
                    onCompleted={(address) => {
                      console.log(address, '전달된 주소');
                      //   setValue('address',address)
                    }}
                  />
                </fieldset>
                {/* {errors.address && <p className='error-text'>주소를 입력해주세요</p>} */}
                <fieldset>
                  <label>상세주소</label>
                  <div className="input">
                    <InputText inputType="text" />
                    {/* {...register("addressDetail",{required:true})} */}
                  </div>
                </fieldset>
                {/* {errors.address && <p className='error-text'>주소를 입력해주세요</p>} */}

                <fieldset>
                  <label>수령인</label>
                  <div className="input">
                    <InputText inputType="text" />
                    {/* {...register("receiver",{required:true})} */}
                  </div>
                </fieldset>
                {/* {errors.address && <p className='error-text'>수령인을 입력해주세요</p>} */}

                <fieldset>
                  <label>전화번호</label>
                  <div className="input">
                    <InputText inputType="text" />
                    {/* {...register("contact",{required:true})} */}
                  </div>
                </fieldset>
                {/* {errors.address && <p className='error-text'>전화번호를 입력해주세요</p>} */}
              </form>
              <strong>
                {orderDumyData[0].title} 등 총 {dumyCartsTotal.totalQuantity()}{' '}
                권
              </strong>
            </div>
          </div>
          <div className="summary">
            <CartSummary
              totalQuantity={dumyCartsTotal.totalQuantity()}
              totalPrice={dumyCartsTotal.totalPice()}
            />
            <Button
              size="large"
              scheme="primary"
              //   onClick={handleSubmit(handlePay)}
            >
              결제하기
            </Button>
          </div>
        </CartStyle>
      </OrderStyle>
    </>
  );
};

const OrderStyle = styled.div``;

export default Order;
