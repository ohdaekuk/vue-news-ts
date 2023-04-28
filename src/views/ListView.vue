<template>
  <div>
    <ListItem :items="ListItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ListItems } from '@/api';
import ListItem from '../components/ListItem.vue';
import { ActionTypes } from '@/store/actions';

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      ListItems: [] as ListItems[],
    };
  },

  methods: {
    async fetchNewsItmes() {
      const pageName = this.$route.name as string;

      try {
        const response = await this.$store.dispatch(
          ActionTypes.FETCH_LIST,
          pageName
        );
        this.ListItems = response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.fetchNewsItmes();
  },
});
</script>

<style></style>
