import axios, { AxiosPromise } from 'axios';

const api = {
  news: 'https://api.hnpwa.com/v0/news/1.json',
  ask: 'https://api.hnpwa.com/v0/ask/1.json',
  jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/',
  basic: 'https://api.hnpwa.com/v0/',
};

interface ListItems {
  comments_count: number;
  content?: string;
  domain?: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

// function fetchNews(): AxiosPromise<ListItems[]> {
//   return axios.get(api.news);
// }

// function fetchAsk(): AxiosPromise<ListItems[]> {
//   return axios.get(api.ask);
// }

// function fetchJobs(): AxiosPromise<ListItems[]> {
//   return axios.get(api.jobs);
// }

function fetchUser(id: string) {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string) {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

function fetchList(type: string): AxiosPromise<ListItems[]> {
  const url = `${api.basic}${type}/1.json`;
  return axios.get(url);
}

export {
  // fetchNews,
  // fetchAsk,
  // fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
  ListItems,
};
