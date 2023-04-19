import Vue from 'vue';
import { MyStore } from '../store/type';

// NOTE : node_module/vuex/types/vue.d.ts 파일 삭제해야함
declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
