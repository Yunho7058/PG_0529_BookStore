import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('제목맞아?', () => {
  it('랜더를 확인합니다', () => {
    //렌더
    render(
      <BookStoreThemeProvider>
        <Title size="small">제목</Title>
      </BookStoreThemeProvider>
    );
    //확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });

  it('사이즈 프롭 확인', () => {
    //렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    //확인
    expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
  });

  it('컬러 프롭 확인', () => {
    //렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );
    //확인
    expect(container?.firstChild).toHaveStyle({ color: 'ButtonText' });
  });
});
