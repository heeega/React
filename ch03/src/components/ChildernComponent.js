import React from "react";

const ChildernComponent = ({ children }) => {
  return (
    <div className="ChildernComponent">
      <h4>ChildernComponent</h4>
      {children}
    </div>
  );
};

export default ChildernComponent;
