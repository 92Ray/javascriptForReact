import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// "5" 존재하면 5 리턴하고, "" 없으면 defaultValue 리턴하는 화살표함수
const getNum = (param, defaultValue) => {
  return !param ? defaultValue : parseInt(param);
  // if (!param) {
  //   return defaultValue;
  // }
  // return parseInt(param);

  // 위의 삼항연산자와 아래 if문의 컨버전
};

const useCustomMove = () => {
  const navigate = useNavigate();

  // const queryDefault = "?page=2&size=10"
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  // ?page=2&size=10
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가
  const [refresh, setRefresh] = useState(false);

  //"..\todo/list?page=1&size=10" <-이걸 문자열로 던져줌
  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({ pathname: `../todo/list`, search: queryStr });
    setRefresh(!refresh);
  };

  //http://localhost:5173/todo/modify?page=1&size=10
  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../todo/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  //http://localhost:5173/todo/read?page=1&size=10
  const moveToRead = (num) => {
    navigate({
      pathname: `../todo/read/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  // ************************************************************************** //
  // http://~~~~~/product/list?page=1&size=10;
  const moveToProductList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    //
    navigate({ pathname: `../product/list`, search: queryStr });
    setRefresh(!refresh);
  };

  const moveToProductread = (pno) => {
    navigate({ pathname: `../product/list`, search: queryStr });
    setRefresh(!refresh);
  };

  return { moveToProductList, moveToModify, moveToRead, page, size, refresh }; //moveToModify 추가
};

export default useCustomMove;
