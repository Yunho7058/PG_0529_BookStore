import React from 'react';
import styled from 'styled-components';
import { TBookDetail } from '../../model/book.model';
import Button from '../common/Button';
import { FaHeart } from 'react-icons/fa';

interface TProps {
  book: TBookDetail;
  onClick: () => void;
}

const LikeBtn = ({ book, onClick }: TProps) => {
  return (
    <LikeBtnStyle
      size="medium"
      scheme={book.liked ? 'like' : 'normal'}
      onClick={onClick}
    >
      <FaHeart />
      {book.likes}
    </LikeBtnStyle>
  );
};

const LikeBtnStyle = styled(Button)`
  display: flex;
  gap: 6px;
  svg {
    color: inherit; // 상위 컴포넌트 상속하겠다.
    * {
      color: inherit;
    }
  }
`;

export default LikeBtn;
