import logo from "./logo.svg";
import "./App.css";
import ContextParent from "./components/ContextParent";
import ContextUserRegister from "./components/ContextUserRegister";
import ContextUserList from "./components/ContextUserList";
import ReduxParent from "./components/ReduxParent";

/*
  날짜 : 2024/05/03
  이름 : 남가희
  내용 : 6장 리액트 상태관리 실습
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>ch06.React 상태관리</h3>
        <h4>Context API 실습</h4>
        <ContextParent />
        <ContextUserRegister />
        <ContextUserList />
        <ReduxParent />
        <h4>Redux(Redux Toolkit) 실습</h4>
      </header>
    </div>
  );
}

export default App;
