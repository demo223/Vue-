/*
    getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，
    getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。
*/
export default {
  square(state) {
    //计算平方
    return state.counter * state.counter;
  },
  dayu25(state) {
    return state.students.filter(s => s.age > 25);
  },
  dayu25length(state, getters) {
    return getters.dayu25.length;
  },
  dayuAge(state) {
    // return function(age) {
    //     return state.students.filter(s => s.age > age)
    // }
    return age => {
      return state.students.filter(s => s.age > age);
    };
  },
  getId(state) {
    return id => {
      return state.students.filter(s => s.id === id);
    };
  }
};
