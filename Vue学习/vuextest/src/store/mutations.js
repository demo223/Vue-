// mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）
export default {
  // 无参
  increase(state) {
    state.counter++;
  },
  decrease(state) {
    state.counter--;
  },
  // 一个参数
  addSize(state, size) {
    state.counter += size;
  },
  subSize(state, size) {
    state.counter -= size;
  },
  // 多个参数(使用对象)
  addStudents(state, s) {
    state.students.push(s);
    },
};
