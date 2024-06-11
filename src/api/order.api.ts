import { TOrder, TOrderSheet } from '../model/order.model';
import { httpsClient } from './http';

export const fetchOrder = async (orderData: TOrderSheet) => {
  const res = await httpsClient.post(`/orders`, orderData);
  return res.data;
};

export const fetchOrders = async () => {
  const res = await httpsClient.get<TOrder[]>(`/orders`);
  return res.data;
};
