import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  const dispatch = useDispatch();
  const { moveToPath } = useCustomLogin();

  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log(accessToken);
      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log(" -------------------------- ");
        console.log("++++ memberInfo ++++" + memberInfo);
        dispatch(login(memberInfo));
        // 소셜회원이라면 패스워드를 수정요쳥해야함.
        // 일반회원이라면 로그인이 끝났으니 메인 페이지로 이동
        if (memberInfo && memberInfo.social) {
          moveToPath("/member/modify");
        } else {
          moveToPath("/");
        }
      });
    });
  }, [authCode, dispatch, moveToPath]);
  return (
    <div>
      <div>Kakao Login Redirect로부터 받은 인가코드</div>
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
