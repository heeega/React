import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);

  // mount 단계
  useEffect(() => {
    console.log("mount...");
    return () => {
      //unmount 단계
      console.log("unmount...");
    };
  }, []);

  // update(re-render) 단계
  useEffect(() => {
    console.log("update...");
  });

  // 상태값 name이 업데이트 될때 실행
  useEffect(() => {
    console.log("state name, age update...");
  }, [name, age]);

  return (
    <div className="UseEffectComponent">
      <h4>useEffect hook 실습</h4>
      {/* prettier-ignore */}
      <>
      <p>이름 : {name}</p>
      <input type="text" value={name}onChange={(e) => {setName(e.target.value);}}
      />
      </>
      {/* prettier-ignore */}
      <>
      <p>나이 : {age}</p>
      <input type="text" value={age}onChange={(e) => {setAge(e.target.value);}}
      />
      </>
    </div>
  );
};

export default UseEffectComponent;
