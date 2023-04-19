import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { Mutations } from './mutations';
import { RootState } from './state';
import { Actions } from './actions';
import { Getters } from './getters';

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  'commit' | 'dispatch' | 'getters'
> &
  MyMutations &
  MyActions &
  MyGetters; // Omit, MyMutations의 합집합
// Omit => commit, dispatch, getters를 제외한다.   MyMutations에서 commit을, MyActions에서 dispatch를 MyGetters에서 getters를 정의했기 때문
