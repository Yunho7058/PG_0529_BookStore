import { TCart } from '../model/cart.model';

export const dumyCarts: TCart[] = [
  {
    id: 0,
    bookId: 1,
    title: '책 제목',
    summary: '책 상세 설명',
    quantity: 10,
    price: 10000,
  },
  {
    id: 1,
    bookId: 2,
    title: '책 제목222',
    summary: '책 상세 설명222',
    quantity: 3,
    price: 15000,
  },
  {
    id: 2,
    bookId: 4,
    title: '책 제목333',
    summary: '책 상세 설명33',
    quantity: 1,
    price: 56000,
  },
];

export const dumyCartsTotal = {
  totalQuantity: () => {
    let totalQuantity = 0;
    dumyCarts.forEach((el) => (totalQuantity += el.quantity));
    return totalQuantity;
  },
  totalPice: () => {
    let totalPice = 0;
    dumyCarts.forEach((el) => (totalPice += el.price));
    return totalPice;
  },
};
