import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "./actions/user";

const App = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(login({ id: "markus", password: "123" }));
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중...</div>
      ) : user.data ? (
        <div>{user.data.nickname} </div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onLogin}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default App;
