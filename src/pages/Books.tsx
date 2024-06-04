import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksView from '../components/books/BooksView';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';

const Books = () => {
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyled>
        <BooksFilter />
        <BooksView />
        <BooksList />
        <BooksEmpty />
        <Pagination />
      </BooksStyled>
    </>
  );
};

const BooksStyled = styled.div``;

export default Books;
