import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksView from '../components/books/BooksView';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';
import { useBooks } from '../hooks/useBooks';

const Books = () => {
  const { books, pagination } = useBooks();

  return (
    <>
      <Title size="large" color="secondary">
        도서 검색 결과
      </Title>
      <BooksStyled>
        <div className="filter">
          <BooksFilter />
          <BooksView />
        </div>

        {books.length === 0 ? (
          <BooksEmpty />
        ) : (
          <BooksList books={books} pagination={pagination} />
        )}
        <Pagination pagination={pagination} />
      </BooksStyled>
    </>
  );
};

const BooksStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
