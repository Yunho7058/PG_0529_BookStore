import { TSignupProps } from '../pages/Signup';
import { httpsClient } from './http';

export const signup = async (userData: TSignupProps) => {
  const res = await httpsClient.post(`/users/join`, userData);
  return res.data;
};

export const resetRequest = async (data: TSignupProps) => {
  const res = await httpsClient.post(`/users/reset`, data);
  return res.data;
};
