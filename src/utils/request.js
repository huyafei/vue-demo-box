import axios from "axios";
import { Message } from "element-ui";
import router from "../router/index";
import { BASE_API } from "../config/index";
import Cookies from "js-cookie";

const service = axios.create({
  baseURL: BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    console.log(config)
    //全局加token
    let token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    const res = response.data;
    if (res.errorCode === 24 && res.errorMsg === "需要登录") {
      Message({
        message: res.errorMsg,
        type: "error",
        duration: 5 * 1000
      });
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      return res;
    }
  },
  function(error) {
    // 对响应错误做点什么
    Message({
      message: error.response.data.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
