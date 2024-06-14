import { TBookReviewItem } from '../model/book.model';
import { httpsClient } from './http';

export const fetchBookReview = async (bookId: string) => {
  //return await httpsClient<TBookReviewItem[]>('get', `/review/${bookId}`);
};
