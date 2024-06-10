import { TBook, TBookDetail } from '../model/book.model';
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

export const fetchBook = async (bookId: string) => {
  const res = await httpsClient.get<TBookDetail>(`books/${bookId}`);
  return res.data;
};

export const likeBook = async (bookId: number) => {
  const res = await httpsClient.post(`likes/${bookId}`);
  return res.data;
};

export const unlikeBook = async (bookId: number) => {
  const res = await httpsClient.delete(`likes/${bookId}`);
  return res.data;
};
