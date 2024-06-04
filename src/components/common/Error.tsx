import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

interface TRouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as TRouteError;
  return (
    <ErrorStyle>
      <h1>오류가 발생했습니다.</h1>
      <p>다음과 같은 오류가 발생했습니다.</p>
      <p>{error.statusText || error.message}</p>
    </ErrorStyle>
  );
};

const ErrorStyle = styled.div``;

export default Error;
