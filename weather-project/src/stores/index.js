import VuexPersistence from "vuex-persist";
import { createStore } from "vuex";

const store = createStore({
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
});

export default store;