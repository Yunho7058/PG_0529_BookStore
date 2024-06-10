import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBook } from '../hooks/useBook';
import { getImgSrc } from '../utils/image';
import Title from '../components/common/Title';
import { TBookDetail } from '../model/book.model';
import { formatDate, formatNumber } from '../utils/format';
import EllipsisBox from '../components/common/EllipsisBox';
import LikeBtn from '../components/book/LikeBtn';
import AddTokCart from '../components/book/AddTokCart';

const bookInfoList = [
  {
    label: '카테고리',
    key: 'category',
    filter: (book: TBookDetail) => {
      return (
        <Link to={`/books?category_id=${book.category_id}`}>
          {book.categoryName}
        </Link>
      );
    },
  },
  {
    label: '포멧',
    key: 'form',
  },
  {
    label: '페이지',
    key: 'pages',
  },
  {
    label: 'ISBN',
    key: 'isbn',
  },
  {
    label: '출간일',
    key: 'pubDate',
    filter: (book: TBookDetail) => {
      return formatDate(book.pubDate);
    },
  },
  {
    label: '가격',
    key: 'price',
    filter: (book: TBookDetail) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle } = useBook(bookId);
  if (!book) return null;
  console.log(book);
  return (
    <BookDetailStyle>
      <div className="header">
        <div className="img">
          <img src={getImgSrc(book.img)} alt={book.title} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {bookInfoList.map((el) => (
            <dl key={el.key}>
              <dt>{el.label}</dt>
              <dd>
                {el.filter
                  ? el.filter(book)
                  : book[el.key as keyof TBookDetail]}
              </dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>
          <div className="like">
            <LikeBtn
              book={book}
              onClick={() => {
                likeToggle();
              }}
            />
          </div>
          <AddTokCart book={book} />
        </div>
      </div>
      <div className="content">
        <Title size="medium">상세 설명</Title>
        <EllipsisBox children={book.detail} linelimit={4} />
        <Title size="medium">목차</Title>
        <p className="index">{book.contents}</p>
      </div>
    </BookDetailStyle>
  );
};

const BookDetailStyle = styled.div`
  /* display: flex;
  flex-direction: row; */
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;
    .img {
      flex: 1 img {
        width: 100%;
        height: auto;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      dl {
        display: flex;
        margin: 0px;
        dt {
          width: 80px;
          color: red;
        }
        a {
          color: blue;
        }
      }
    }
  }
  .content {
    .detail {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`;

export default BookDetail;
