import { http, HttpResponse } from 'msw';
import { TBookReviewItem } from '../model/book.model';
import { fakerKO as faker } from '@faker-js/faker';

export const reviewsById = http.get(
  'http://localhost9999/reviews/:bookId',
  () => {
    const data: TBookReviewItem[] = Array.from({ length: 8 }).map(
      (_, index) => ({
        id: index,
        userName: faker.person.lastName() + faker.person.firstName(),
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past().toISOString(),
        score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
      })
    );
    return HttpResponse.json(data, { status: 200 });
  }
);
