// 封装请求
import api from "./api";
import axios from "axios";
import rule from "../rule";
import standard from "../standard";

// 全局设置
axios.defaults.headers.common["Authorization"] = "anyone";
axios.defaults.headers.post["Content-Type"] = "application/json";

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use(config => {
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  return config;
});

// 响应拦截
// axios.interceptors.response.use(
//   response => {},
//   err => {}
// );

// 请求设置
const http = axios.create({
  baseURL: "/",
  timeout: 2000
});

const req = {};

// get请求
req.get = (url, data) => {
  return http.get(url, { params: data });
};

// post请求
req.post = (url, data) => {
  return http.post(url, data);
};

const service = ({ name, data }) => {
  const inter = api[name];
  return new Promise((resolve, reject) => {
    req[inter["method"]](inter["url"], data).then(res => {
      const protocol = rule.protocol(res);
      protocol.ok
        ? resolve(standard.process(name, protocol.data))
        : reject(protocol);
    }, reject);
  });
};

export default service;
