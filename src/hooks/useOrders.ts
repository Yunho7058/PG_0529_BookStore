import { useEffect, useState } from 'react';
import { TOrder } from '../model/order.model';
import { fetchOrders } from '../api/order.api';

export const useOrders = () => {
  const [orders, setOrders] = useState<TOrder[]>([]);
  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data);
    });
  }, []);
  return { orders };
};
