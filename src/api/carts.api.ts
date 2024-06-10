import { TCategory } from '../model/category.model';
import { httpsClient } from './http';

interface TAddCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: TAddCartParams) => {
  const response = await httpsClient.post('/carts', params);
  return response.data;
};
