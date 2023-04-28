import { ActionContext } from 'vuex';
import { MutationTypes, Mutations } from './mutations';
import { RootState } from './state';
import { fetchItem, fetchList, fetchUser } from '@/api';

enum ActionTypes {
  // FETCH_NEWS = 'FETCH_NEWS',
  // FETCH_ASK = 'FETCH_ASK',
  // FETCH_JOBS = 'FETCH_JOBS',
  FETCH_LIST = 'FETCH_LIST',
  FETCH_USER = 'FETCH_USER',
  FETCH_ITEM = 'FETCH_ITEM',
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

const actions = {
  // async [ActionTypes.FETCH_NEWS](
  //   context: MyActionContext,
  //   payload?: ListItems[]
  // ) {
  //   const { data } = await fetchNews();
  //   context.commit(MutationTypes.SET_NEWS, data);
  //   return data;
  // },
  // async [ActionTypes.FETCH_ASK](
  //   context: MyActionContext,
  //   payload?: ListItems[]
  // ) {
  //   const { data } = await fetchAsk();
  //   context.commit(MutationTypes.SET_NEWS, data);
  //   return data;
  // },
  // async [ActionTypes.FETCH_JOBS](
  //   context: MyActionContext,
  //   payload?: ListItems[]
  // ) {
  //   const { data } = await fetchJobs();
  //   context.commit(MutationTypes.SET_NEWS, data);
  //   return data;
  // },
  async [ActionTypes.FETCH_LIST](context: MyActionContext, payload: string) {
    const { data } = await fetchList(payload);
    context.commit(MutationTypes.SET_LIST, data);
    return data;
  },
  async [ActionTypes.FETCH_USER](context: MyActionContext, payload: string) {
    const { data } = await fetchUser(payload);
    context.commit(MutationTypes.SET_USER, data);
    return data;
  },
  async [ActionTypes.FETCH_ITEM](context: MyActionContext, payload: string) {
    const { data } = await fetchItem(payload);
    context.commit(MutationTypes.SET_ITEM, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };
// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from '../api/index';

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then(response => commit('SET_NEWS', response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then(response => commit('SET_ASK', response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then(response => commit('SET_JOBS', response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then(res => commit('SET_USER', res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then(res => commit('SET_LIST', res.data));
//   },
// };
