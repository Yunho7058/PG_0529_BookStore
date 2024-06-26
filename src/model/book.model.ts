export interface TBook {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface TBookDetail extends TBook {
  categoryName: string;
  liked: boolean;
}

export interface TBookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}
