import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

/**
 * 라우팅 주소에서 cate1, cate2를 반환하는 커스텀 훅
 */
const useCates = () => {
  // 인사말 및 찾아오시는길 개별 적용 ex) localhost:3000/introduction/direction
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const paths = location.pathname.split("/");
  //paths[0]= localhost:3000
  let cate1 = paths[1]; // introduction 게시판의 경우 board
  let cate2 = paths[2]; // direction or hello 게시판의 경우 list

  // board의 경우 board/list?cate1==croptalk&cate2=story로 나누어지므로 cate1 값과 cate2 값 추출해야함
  if (cate1 === "board") {
    cate1 = searchParams.get("cate1");
    cate2 = searchParams.get("cate2");
  }

  return [cate1, cate2];
};

export default useCates;
