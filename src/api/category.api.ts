import { TCategory } from '../model/category.model';
import { httpsClient } from './http';

export const fetchCategory = async () => {
  console.log('2');
  const response = await httpsClient.get<TCategory[]>('/category');
  return response.data;
};
