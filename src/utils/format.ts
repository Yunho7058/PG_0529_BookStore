import dayjs from 'dayjs';

export const formatNumber = (num: number): string => {
  // 콤마 찍어주는 함수 10,000,000
  return num.toLocaleString();
};

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : 'YYYY년 MM월 DD일');
};
