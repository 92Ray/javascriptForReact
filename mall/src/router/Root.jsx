import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const List = lazy(() => import("../pages/todo/ListPage"));
const Read = lazy(() => import("../pages/todo/ReadPage"));
const Modify = lazy(() => import("../pages/todo/ModifyPage"));
// 필요시 Add 추가

const Root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:id", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <Read />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <Read />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <Modify />
      </Suspense>
    ),
  },
]);

export default Root;
