import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';
import Button from './Button';
import InputText from './InputText';
import React from 'react';

describe('InptText 컴포넌트 확인', () => {
  it('랜더를 확인합니다', () => {
    //렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="입력칸" />
      </BookStoreThemeProvider>
    );
    //확인
    expect(screen.getByPlaceholderText('입력칸')).toBeInTheDocument();
  });

  it('input forwordref 테스트', () => {
    //html ref를 생성후 이거랑 같은지 비교하는 테스트
    const ref = React.createRef<HTMLInputElement>();
    //렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="입력칸" ref={ref} />
      </BookStoreThemeProvider>
    );
    //확인
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
