import Vue from "vue";
import Vuex from "vuex";
const countVuex = {
  namespaced:true,
  state: {
    sum: 0,
    school: "积云教育",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
  mutations: {
    JIA(state, value) {
      state.sum += value;
      console.log("mutation的JIA被调用了", state, value);
    },
  },
  actions: {
    jiAdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("JIA", value);
        console.log("action的jiaAdd被调用了", context, value);
      }
    },
    waitAdd(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 1000);
    },
  },
};
const personVuex = {
  namespaced:true,
  state: {
    personList: [
      {
        id: "001",
        name: "佩奇",
      },
    ],
  },
  getters: {
    fristPersonName(state) {
      return state.personList[0].name;
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  actions: {
    addWang(context, value) {
      if (value.name.indexOf("王") == 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人不姓王！");
      }
    },
  },
};

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    countVuex,
    personVuex,
  },
});
