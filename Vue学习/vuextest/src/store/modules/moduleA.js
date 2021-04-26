export default {
  state: {
    name: "张三",
    address: "湖北省",
    age: 28
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    updateName(context) {
      setTimeout(() => {
        context.commit("changeName", "周岐");
        // 使用前面的changeName方法
      }, 2000);
    }
  },
  getters: {
    fullName(state) {
      return state.address + state.name;
    },
    fullName2(state, getters) {
      return getters.fullName + state.age;
    }
  }
};