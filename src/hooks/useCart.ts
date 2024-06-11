import { useEffect, useState } from 'react';
import { TCart } from '../model/cart.model';
import { fetchCart } from '../api/carts.api';
import { dumyCarts } from '../dumy/dumyCarts';

export const useCart = () => {
  const [carts, setCarts] = useState<TCart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  // const dumyCart = dumyCarts;
  console.log(dumyCarts);
  useEffect(() => {
    //api
    // fetchCart().then((carts) => {
    //   setCarts(carts);
    //   setIsEmpty(carts.length === 0);
    // });

    setCarts(dumyCarts);
    setIsEmpty(dumyCarts.length === 0);
  }, []);
  return { carts, isEmpty };
};
