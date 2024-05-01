import React, { useState } from "react";

const UseStateComponent = () => {
  //State 생성
  const [count, setCount] = useState(0); // 정수
  const [message, setMessage] = useState(""); //문자열
  const [user, setUser] = useState({ uid: "", name: "", age: 0 }); //객체

  const inputChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="UseStateComponent">
      <h4>useState Hook 실습</h4>
      {/* prettier-ignore */}
      <p>
        상태값 count : {count}
        <br />
        <button onClick={() => {setCount(count+1)}}>증가</button>
        <button onClick={() => {setCount(count-1)}}>감소</button>
      </p>

      <p>{message}</p>
      <input type="text" value={message} onChange={inputChangeHandler}></input>

      <p>
        아이디 : {user.uid}
        <br />
        이름 : {user.name}
        <br />
        나이 : {user.age}
        <br />
      </p>
      <input
        type="text"
        value={user.uid}
        onChange={(e) => {
          setUser({ ...user, uid: e.target.value });
        }}
      />
      <br />

      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        value={user.age}
        onChange={(e) => {
          setUser({ ...user, age: e.target.value });
        }}
      />
    </div>
  );
};

export default UseStateComponent;
