import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';
import Button from './Button';

describe('Button 컴포넌트 확인', () => {
  it('랜더를 확인합니다', () => {
    //렌더
    render(
      <BookStoreThemeProvider>
        <Button size="small" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    //확인
    expect(screen.getByText('버튼')).toBeInTheDocument();
  });

  it('size props 적용', () => {
    //렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    //확인
    expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
  });
});
