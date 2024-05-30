import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('북 스토어 랜더링 했니?', () => {
  render(<App />);
  const linkElement = screen.getByText(/book store/i);
  expect(linkElement).toBeInTheDocument();
});

test('홈 컴포넌트 연결했니?', () => {
  render(<App />);
  const linkElement = screen.getByText(/홈이야/i);
  expect(linkElement).toBeInTheDocument();
});
