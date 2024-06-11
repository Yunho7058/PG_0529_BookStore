export interface TOrder {
  id: number;
  createAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface TOrderSheet {
  item: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: TDelivery;
}

export interface TDelivery {
  address: string;
  receiver: string;
  contact: string;
}
