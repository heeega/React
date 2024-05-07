import React, { useContext } from "react";
import UserContext from "../contexts/UserContext"; // 중괄호 사용하지 않음

const ContextUserList = () => {
  const { users } = useContext(UserContext); // setUsers는 필요하지 않음
  return (
    <div className="ContextUserList">
      <p>ContextUserList</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid},{user.name},{user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextUserList;
