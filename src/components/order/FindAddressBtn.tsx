import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface TProps {
  onCompleted: (address: string) => void;
}
const SCRIPT_URL =
  '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const FindAddressBtn = ({ onCompleted }: TProps) => {
  // 입력
  const handleOpen = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    //<script></> 태그 생성
    script.src = SCRIPT_URL;
    //태그 안 src 속성 추가
    script.async = true;
    document.head.appendChild(script);
    // <head><script src={SCRIPT_URL}></script></head> 최종 상태

    // 버튼이 사라지면
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
      주소 찾기
    </Button>
  );
};

const FindAddressBtnStyle = styled.div``;

export default FindAddressBtn;
