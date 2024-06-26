import { useEffect, useState } from 'react';
import { TCategory } from '../model/category.model';
import { fetchCategory } from '../api/category.api';
import { useLocation } from 'react-router-dom';

const Category = [
  { id: null, name: '전체' },
  { id: 0, name: '소설' },
  { id: 1, name: '사회' },
  { id: 2, name: '교육' },
];

export const useCategory = () => {
  const [category, setCategory] = useState<TCategory[]>(Category);
  const location = useLocation();
  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get('category_id')) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.id === Number(params.get('category_id')),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    setActive();
  }, [location.search]);
  //   useEffect(() => {
  //     console.log('유즈이펙트 실행 1');
  //     fetchCategory().then((category) => {
  //       if (!category) return;
  //       const categoryWithAll = [
  //         {
  //           id: null,
  //           name: '전체',
  //         },
  //         ...category,
  //       ];

  //       console.log('데이터 받아오기 3', category);

  //       setCategory(categoryWithAll);
  //     });
  //   }, []);
  return { category };
};
