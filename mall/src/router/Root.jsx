import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";
// 1.라우터(컨트롤러 대상이 되는 페이지를 가져와야 한다)
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Login = lazy(() => import("../pages/LoginPage"));
// ***** todo *****
const List = lazy(() => import("../pages/todo/ListPage"));
const Read = lazy(() => import("../pages/todo/ReadPage"));
const Modify = lazy(() => import("../pages/todo/ModifyPage"));
const Add = lazy(() => import("../pages/todo/AddPage"));
// ***** Product *****
const ProductListPage = lazy(() => import("../pages/product/ListPage"));
const ProductAddPage = lazy(() => import("../pages/product/AddPage"));
const ProductReadPage = lazy(() => import("../pages/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../pages/product/ModifyPage"));
// ***** member *****
const LoginPage = lazy(() => import("../pages/member/LoginPage"));
const LogoutPage = lazy(() => import("../pages/member/logoutPage"));
const KakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectPage"));
const MemberModify = lazy(() => import("../pages/member/ModifyPage"));
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
  // ***** todo *****
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
    path: "/todo/modify/:tno", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <Modify />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <Add />
      </Suspense>
    ),
  },
  // ***** Product *****
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:tno", // 일반적으로 상세 페이지는 id 파라미터를 받습니다
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  // ***** member *****
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/member/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },

  // ***** Kakao 로그인 *****
  {
    path: "/member/kakao",
    element: (
      <Suspense fallback={<Loading />}>
        <KakaoRedirect />
      </Suspense>
    ),
  },

  {
    path: "/member/modify",
    element: (
      <Suspense fallback={Loading}>
        <MemberModify />
      </Suspense>
    ),
  },
]);

export default Root;
