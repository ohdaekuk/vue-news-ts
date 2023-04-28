import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route } from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../store/index';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        next();
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
      beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        try {
          store
            .dispatch('FETCH_ITEM', itemId)
            .then(() => next())
            .catch(() => new Error('failed to fetch item details'));
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      path: '/user/:id',
      component: UserView,
      beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        try {
          store
            .dispatch('FETCH_USER', itemId)
            .then(() => next())
            .catch(() => new Error('failed to fetch user profile'));
        } catch (error) {
          console.log(error);
        }
      },
    },
  ],
});
