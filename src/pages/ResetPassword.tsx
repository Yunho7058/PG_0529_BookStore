import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { resetRequest, signup } from '../api/auth.api';
import { useAlert } from '../hooks/useAlert';
import { SignupStyle } from './Signup';

export interface TSignupProps {
  email: string;
  password: string;
}

const ResetPassword = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //form 액션을 했을 자동으로 이동을함 그래서 아래 함수를 작동시켜 다음활동 막기
  //     e.preventDefault();
  //     console.log(email, password);
  //   };
  const navigate = useNavigate();
  const showAlert = useAlert();
  const [resetRequested, setResetRequested] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupProps>();
  const onSubmit = (data: TSignupProps) => {
    if (resetRequested) {
      //초기화
      //resetRequest(data).then(() => {
      showAlert('비밀번호 초기화 하였습니다.');
      navigate('/login');
      //  });
    } else {
      // 요청
      //resetRequest(data).then(() => {
      setResetRequested(true);
      //});
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
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
          {resetRequested && (
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
          )}

          <fieldset>
            <Button size="medium" scheme="primary">
              {resetRequested ? '비밀번호 초기화' : '초기화 요청'}
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

export default ResetPassword;
