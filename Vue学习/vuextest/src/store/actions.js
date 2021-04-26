export default {
  addPerson(context) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          let payload = { id: 666, name: "周岐", age: 22 };
        context.commit("addStudents", payload);
        resolve();
      }, 2000);
    });
  }
};