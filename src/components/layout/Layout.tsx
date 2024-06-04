import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import styled from 'styled-components';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutStlye>{children}</LayoutStlye>
      <Footer />
    </>
  );
};
const LayoutStlye = styled.main`
  width: 100%;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;
export default Layout;
