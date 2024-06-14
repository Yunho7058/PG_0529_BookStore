import { useCallback } from 'react';

export const useAlert = () => {
  //useCallback 필여할때만 다시 생성하는 useCallback과 useEffact 차이는?
  const showAlert = useCallback((msg: string) => {
    alert(msg);
  }, []);
  return showAlert;
};
