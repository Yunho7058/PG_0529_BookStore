import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>헤더입니다.</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.background};
`;

export default Header;
