import { ListItems } from '@/api';

const state = {
  news: [] as ListItems[],
  list: [] as ListItems[],
  user: {} as ListItems,
  item: {} as ListItems,
};

type RootState = typeof state;

export { state, RootState };
