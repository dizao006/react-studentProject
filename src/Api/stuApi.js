import request from "./request";
export async function getStuListApi() {
  // 获取学生列表
  return request({
    url: "/students",
    method: "GET",
  });
}
// 添加
export async function addStu(data) {
  return request({
    url: "/students",
    method: "POST",
    data,
  });
}
//根据id获取详细信息
export function getStuByid(id) {
  return request({
    url: `/students/${id}`,
    method: "GET",
  });
}
//删除
export function deleteStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: "DELETE",
  });
}
// 修改
export function editStuByIdApi(id, data) {
  return request({
    url: `/students/${id}`,
    method: "PATCH",
    data,
  });
}
