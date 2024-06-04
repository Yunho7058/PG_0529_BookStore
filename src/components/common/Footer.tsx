import styled from 'styled-components';
import logo from '../../asset/images/logo.png';

const Footer = () => {
  return (
    <FooterStlyed>
      <h1>
        <img src={logo} alt="logo" width="300px" height="75px" />
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, BookStore.</p>
      </div>
    </FooterStlyed>
  );
};

const FooterStlyed = styled.footer`
  width: 100%;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: space-between;
  .logo {
    img {
      width: 100px;
    }
  }
  .copyright {
    p {
      font-size: 0%.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;

export default Footer;
