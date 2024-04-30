import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  render() {
    return (
      <div className="parentComponent">
        ParentComponent
        <h4>부모 컴포넌트</h4>
        <p>부모 컴포넌트 입니다.</p>
        <ChildComponent />
      </div>
    );
  }
}
