import { TOrder } from '../model/order.model';

export const dumyOrders: TOrder[] = [
  {
    id: 0,
    createAt: '2024-04-05',
    address: '서울',
    receiver: '윤호',
    contact: '010-4321-1234',
    bookTitle: '책 제목 더미',
    totalQuantity: 10,
    totalPrice: 30000,
  },
  {
    id: 1,
    createAt: '2024-04-05',
    address: '서울222',
    receiver: '윤호',
    contact: '010-4321-1234',
    bookTitle: '책 제목 더미222',
    totalQuantity: 1,
    totalPrice: 5000,
  },
  {
    id: 2,
    createAt: '2024-04-05',
    address: '서울333',
    receiver: '윤호',
    contact: '010-4321-1234',
    bookTitle: '책 제목 더미333',
    totalQuantity: 4,
    totalPrice: 23000,
  },
];
