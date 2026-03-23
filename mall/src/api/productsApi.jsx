import axios from "axios";
import jwtAxios from "../util/jwtUtil";

// 서버주소
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/products`;
// get방식과 같음

export const getOne = async (pno) => {
  const res = await jwtAxios.get(`${prefix}${pno}`);
  return res.data;
};

// http://localhost:8080/api/products/list?page=1&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

// http://localhost:8080/api/products/
export const postAdd = async (product) => {
  //파일업로드 할때에는 기본값인  ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.post(`${prefix}/`, product, header);
  return res.data;
};

// http://localhost:8080/api/product/10 method = delete
export const deleteOne = async (pno) => {
  const res = await jwtAxios.delete(`${prefix}/${pno}`);
  return res.data;
};

export const putOne = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.put(`${prefix}/${pno}`, product, header);
  return res.data;
};
