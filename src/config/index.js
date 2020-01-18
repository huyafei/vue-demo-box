let URL = "http://112.124.109.29:32002";
let BASE_API;
if (process.env.NODE_ENV === "development") {
  //开发环境下的代理地址，
  BASE_API = "http://112.124.109.29:32002";
} else if (process.env.NODE_ENV === "production"){
  //生产环境下的地址
  BASE_API = URL;
}
export { BASE_API };
