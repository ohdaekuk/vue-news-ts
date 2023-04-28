import { ListItems } from '@/api';
import { RootState } from './state';

enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
  SET_LIST = 'SET_LIST',
  SET_USER = 'SET_USER',
  SET_ITEM = 'SET_ITEM',
}

const mutations = {
  // [MutationTypes.SET_NEWS](state: RootState, news: ListItems[]) {
  //   state.news = news;
  // },
  [MutationTypes.SET_LIST](state: RootState, list: ListItems[]) {
    state.list = list;
  },
  [MutationTypes.SET_USER](state: RootState, user: ListItems) {
    state.user = user;
  },
  [MutationTypes.SET_ITEM](state: RootState, item: ListItems) {
    state.item = item;
  },
};

type Mutations = typeof mutations;

export { mutations, Mutations, MutationTypes };

// export default {
//   SET_NEWS(state: RootState, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
