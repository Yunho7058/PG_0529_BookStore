import { TBook } from '../model/book.model';
import { TCategory } from '../model/category.model';
import { TPagination } from '../model/pagination.model';
import { httpsClient } from './http';

interface TParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface TResponse {
  books: TBook[];
  pagination: TPagination;
}

export const fetchBooks = async (params: TParams) => {
  try {
    const response = await httpsClient.get<TResponse>('/books', {
      params: params,
    });
    return response.data;
  } catch (err) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
