import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return (
      <div className="ChildComponent">
        ChildComponent
        <h4>자식 컴포넌트</h4>
        <p>자식 컴포넌트 입니다.</p>
      </div>
    );
  }
}
