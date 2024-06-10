import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TBook } from '../model/book.model';
import { TPagination } from '../model/pagination.model';
import { fetchBooks } from '../api/books.api';
import { QUERYSTRING } from '../constants/qurystring';
import { LIMIT } from '../constants/pagination';
import { dummyBooks } from '../dumy/dumyBooks';

export const useBooks = () => {
  const location = useLocation();
  const [books, setBooks] = useState<TBook[]>([]);
  const [pagination, setPagination] = useState<TPagination>({
    totalCount: 0,
    currentPage: 1,
  });
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // fetchBooks({
    //   category_id: params.get(QUERYSTRING.CATEGORY_ID)
    //     ? Number(params.get(QUERYSTRING.CATEGORY_ID))
    //     : undefined,
    //   news: params.get(QUERYSTRING.NEWS) ? true : undefined,
    //   currentPage: params.get(QUERYSTRING.PAGE)
    //     ? Number(params.get(QUERYSTRING.PAGE))
    //     : 1,
    //   limit: LIMIT,
    // }).then((res) => {
    //   setBooks(res.books);
    //   setPagination(res.pagination);
    // });

    const category_id = params.get(QUERYSTRING.CATEGORY_ID)
      ? Number(params.get(QUERYSTRING.CATEGORY_ID))
      : undefined;
    const news = params.get(QUERYSTRING.NEWS) ? true : undefined;
    const currentPage = params.get(QUERYSTRING.PAGE)
      ? Number(params.get(QUERYSTRING.PAGE))
      : 1;
    const limit = LIMIT;
    if (category_id === undefined) {
      setBooks(dummyBooks);
      setPagination({
        totalCount: dummyBooks.length,
        currentPage: currentPage,
      });
    } else {
      let filterDumy = dummyBooks.filter(
        (el) => el.category_id === category_id
      );
      // 0,8 -> 9, 17 -> 18, 27
      let last = limit * currentPage;
      let first = last === limit ? 0 : last + 1;
      setBooks(filterDumy.slice(first, last));
      setPagination({
        totalCount: filterDumy.length,
        currentPage: currentPage,
      });
    }
  }, [location.search]);

  return { books, pagination };
};
