import React, { useReducer } from "react";

//초기 상태와 리듀서 함수 정의
const initCountState = { count: 0 };
function countReducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

//초기상태와 리듀서 함수 정의
const initUserState = { name: "", age: 0 };
function userReducer(state, action) {
  console.log("action : " + action);
  return { ...state, [action.name]: action.value };
}

const UseReducerComponent = () => {
  const [countState, countDispatch] = useReducer(countReducer, initCountState);
  const [userState, userDispatch] = useReducer(userReducer, initUserState);

  return (
    <div className="UseReducerComponent">
      <h4>UseReducer hook 실습</h4>

      <p>count : {countState.count}</p>
      {/* prettier-ignore */}
      <>
      <button onClick={() => {countDispatch({type:'INCREASE'})}}>증가</button>
      <button onClick={() => {countDispatch({type:'DECREASE'})}}>감소</button>
      <button onClick={() => {countDispatch({type:'RESET'})}}>리셋</button>
      </>

      <p>
        이름 : {userState.name}
        <br />
        나이 : {userState.age}
        <br />
      </p>
      {/* prettier-ignore */}
      <>
      <input type="text" name="name" value={userState.name} onChange={(e)=>{userDispatch(e.target)}}/>
      <input type="text" name="age" value={userState.age} onChange={(e)=>{userDispatch(e.target)}} />
      </>
    </div>
  );
};

export default UseReducerComponent;