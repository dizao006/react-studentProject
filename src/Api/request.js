// 封装axios
import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
// 请求拦截
request.interceptors.request.use((config) => {
  console.log("====================================");
  console.log("@@请求拦截", config);
  console.log("====================================");
  return config;
});

//响应拦截
request.interceptors.response.use(
  (res) => {
    console.log("====================================");
    console.log("@ss响应拦截", res);
    console.log("====================================");
    return res;
  },
  (err) => {
    console.log("错误", err);
  }
);
export default request;
