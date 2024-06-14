import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signup } from '../api/auth.api';
import { useAlert } from '../hooks/useAlert';

export interface TSignupProps {
  email: string;
  password: string;
}

const Signup = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //form 액션을 했을 자동으로 이동을함 그래서 아래 함수를 작동시켜 다음활동 막기
  //     e.preventDefault();
  //     console.log(email, password);
  //   };
  const navigate = useNavigate();
  const showAlert = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupProps>();
  const onSubmit = (data: TSignupProps) => {
    console.log(data);
    // signup(data).then((res) => {
    //   showAlert('회원가입을 성공하셨습니다.');
    //   navigate('/login');
    // });
  };
  const hadleTset = () => {
    console.log('하이222');
  };
  console.log(errors);
  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <Button size="medium" scheme="primary" type="submit">
              회원가입
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/resetPassword">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
};

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80xp auto;
  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }
  input {
    width: 100%;
  }
  button {
    width: 100%;
  }
  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

export default Signup;
