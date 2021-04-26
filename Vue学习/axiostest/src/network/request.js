import axios from "axios";

export function request(config) {
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000
  });
  // 2. axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(
    config => {
      // console.log(config)
      // 在发送请求之前做些什么
      return config;
    },
    err => {
      // 1. 比如config中的一些信息不符合服务器的要求
      // 2. 比如每次发送网络请求时，
      //    都希望在界面中显示一个请求的图标
      // 3. 某些网络请求比如登录(token)，
      //    必须携带一些特殊的信息
      // 若请求失败，做些什么
      return Promise.reject(err);
    }
  );
  // 2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      //对响应数据做点什么
      //   console.log(res);
      return res;
    },
    err => {
      // 若响应失败，做点什么
      //   console.log(err);
      return Promise.reject(err);
    }
  );
  // 3. 发送真正的网络请求
  return instance(config);
}

request({
  URL: "/Images/get_image"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
