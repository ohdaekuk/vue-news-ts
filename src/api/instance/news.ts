import { news } from './index-instance';

export function fetchNews(id: string) {
  return news.get(id);
}
