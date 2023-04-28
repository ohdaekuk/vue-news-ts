<template>
  <ul class="news-list">
    <li v-for="list in items" :key="list.id" class="post">
      <div class="points">
        {{ list.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="list.domain">
            <a :href="list.url">{{ list.title }}</a
            ><small class="link-text" v-if="list.domain"
              >({{ list.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${list.id}`">{{ list.title }}</router-link
            ><small
              ><a class="link-text" :href="list.domain" v-if="list.domain"
                >({{ list.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="list.user" class="link-text">
          by
          <router-link :to="`/user/${list.user}`" class="link-text">{{
            list.user
          }}</router-link>
        </small>
        <small v-if="list.time_ago" class="link-text">
          <!-- {{ list.time_ago }} -->
          {{ timeAgo(list) }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { ListItems } from '@/api';
import Vue from 'vue';
import { PropType } from 'vue/types/v3-component-props';
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<ListItems[]>,
      required: true,
    },
  },

  methods: {
    timeAgo(list: ListItems): string {
      return list.time_ago.concat(', 2023');
    },
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
