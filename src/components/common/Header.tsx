import styled from 'styled-components';
import logo from '../../asset/images/logo.png';
const Category = [
  { id: null, name: '전체' },
  { id: 0, name: '소설' },
  { id: 1, name: '사회' },
  { id: 2, name: '교육' },
];

const Header = () => {
  return (
    <HeaderStyle>
      <h1>
        <img src={logo} alt="logo" width="400px" height="150px" />
      </h1>
      <nav className="category">
        <ul>
          {Category.map((el) => (
            <li key={el.id}>
              <a
                href={el.id === null ? '/books' : `/books?category_id=${el.id}`}
              >
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  /* background-color: ${({ theme }) => theme.color.background}; */
  width: 100%;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.layout.width.large};
`;

export default Header;
