import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  // %ED%99%8D%EA%B8%B8%EB%8F%99 => 홍길동 // 깨진 문자를 한글로 다시 바꿔주는 역할
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  recucers: {
    login: (state, action) => {
      const data = action.payload;
      console.log("로그인 금고지기" + data.email + "  " + data.email);
      setCookie("member", JSON.stringify(data), 1);
      return data;
    },
    logout: (state, action) => {
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled: 완료");
        const payload = action.payload;
        //정상적인 로그인시에만 쿠키에 저장
        if (action.payload.error) {
          console.log("쿠키 저장");
          setCookie("member", JSON.stringify(payload), 1); //1 일
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending: 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected: 오류");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
