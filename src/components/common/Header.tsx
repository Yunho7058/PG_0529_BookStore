import styled from 'styled-components';
import logo from '../../asset/images/logo.png';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TCategory } from '../../model/category.model';
import { fetchCategory } from '../../api/category.api';
import { useCategory } from '../../hooks/useCategory';
// const Category = [
//   { id: null, name: '전체' },
//   { id: 0, name: '소설' },
//   { id: 1, name: '사회' },
//   { id: 2, name: '교육' },
// ];

const Header = () => {
  const { category } = useCategory();
  return (
    <HeaderStyle>
      <h1>
        <Link to="/">
          <img src={logo} alt="logo" width="400px" height="115px" />
        </Link>
      </h1>
      <nav className="category">
        <ul>
          {category.map((el) => (
            <li key={el.id}>
              <Link
                to={el.id === null ? '/books' : `/books?category_id=${el.id}`}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <Link to="login">
              <FaSignInAlt />
              로그인
            </Link>
          </li>
          <li>
            <Link to="singup">
              <FaRegUser />
              회원가입
            </Link>
          </li>
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

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }
  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};
          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
