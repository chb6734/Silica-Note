import { combineReducers } from "redux";
import Home from "./home";
import Link from "./link";
import Introduce from "./introduce";
import notice from "../modules/home/reducer";
import { noticeSaga } from "../modules/home/";
import SingIn from "./sing_in";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ Home, Introduce, Link, SingIn, notice });

// 루트 리듀서 내보내기
export default rootReducer;

// 루트 리듀서 반환 값 유추하기 위한 타입 정의하기
export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
  yield all([noticeSaga()]);
}
