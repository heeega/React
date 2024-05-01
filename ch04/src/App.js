import logo from "./logo.svg";
import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UserRefComponent from "./components/UserRefComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UseCallbakComponent from "./components/UseCallbakComponent";

/*
  날짜 : 2024/05/01
  이름 : 남가희
  내용 : 4장. 리액트 훅 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch04.React Hooks</h3>
      <UseStateComponent />
      <UserRefComponent />
      <UseReducerComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <UseCallbakComponent />
    </div>
  );
}

export default App;
