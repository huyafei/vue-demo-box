import request from "@/utils/request";
export function getUserList(params) {
  console.log(params)
  return request({
    url: "/api/organization-users",
    method: "get",
    params: params
  });
}
export function addUser(params) {
  return request({
    url: "/api/organization-user",
    method: "post",
    data: params
  });
}
