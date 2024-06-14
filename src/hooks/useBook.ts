import { useEffect, useState } from 'react';
import { TBook, TBookDetail, TBookReviewItem } from '../model/book.model';
import { fetchBook, likeBook, unlikeBook } from '../api/books.api';
import { dummyBooks } from '../dumy/dumyBooks';
import { fetchBookReview } from '../api/review.api';

export const useBook = (bookId: string | undefined) => {
  //관리 권한 로그인 상태
  // const {isLoggedIn} = useAuthStore()
  // const showAlert = useAlert()

  const [book, setBook] = useState<TBookDetail | null>(null);
  const [review, setReview] = useState<TBookReviewItem[]>([]);
  //api
  // const likeToggle = () => {
  //   if(isLoggedIn){
  //   showAlert('로그인이 필요합니다. return;')}
  //   if (!book) return;
  //   if (book.liked) {
  //     unlikeBook(book.id).then(() => {
  //       //성공처리
  //       setBook({ ...book, liked: false, likes: book.likes - 1 });
  //     });
  //   } else {
  //     likeBook(book.id).then(() => {
  //       //성공처리
  //       setBook({ ...book, liked: true, likes: book.likes + 1 });
  //     });
  //   }
  // };
  const likeToggle = () => {
    if (!book) return;
    if (book.liked) {
      console.log(book);

      setBook({ ...book, liked: false, likes: book.likes - 1 });
    } else {
      console.log(book);
      //성공처리
      setBook({ ...book, liked: true, likes: book.likes + 1 });
    }
  };
  //낙관적 업데이트 book 전체를 말고 일부만 업데이트
  // useEffect(() => {

  //   fetchBook(bookId).then((data) => {
  //     setBook(data);
  //   });

  // }, [book]);

  useEffect(() => {
    //if (!bookId) return;
    const dumyData = dummyBooks;
    const bookData = dumyData.filter((el) => el.id === Number(bookId));
    const bookDetailData = {
      ...bookData[0],
      categoryName: '소설',
      liked: false,
    };
    //[{}]
    setBook(bookDetailData);
    //categoryName: string;
    //liked: boolean;
    // fetchBookReview(bookId).then((reviews) => {
    //   setReview(reviews)
    // });
  }, [bookId]);

  return { book, likeToggle, review };
};
