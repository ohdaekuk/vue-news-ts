import { ListItems } from '@/api';
import { RootState } from './state';

const getters = {
  fetchedNews(state: RootState): ListItems[] {
    return state.news;
  },
  fetchedUser(state: RootState) {
    return state.user;
  },
  fetchedItem(state: RootState) {
    return state.item;
  },
  userName(state: RootState) {
    return state.item.user;
  },
  userContent(state: RootState) {
    return state.item.content;
  },
  userQuestion(state: RootState) {
    return state.item.title;
  },
  userTimeAgo(state: RootState) {
    return state.item.time_ago;
  },
  contentPoints(state: RootState) {
    return state.item.points;
  },
};

type Getters = typeof getters;

export { getters, Getters };

// export default {

//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
