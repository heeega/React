import ContextChild from "./ContextChild";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, reset } from "../slices/CounterSlice";

const ReduxParent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="ReduxParent">
      <p>ReduxParent count : {count}</p>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          dispatch(reset(0));
        }}
      >
        리셋
      </button>

      <ContextChild />
    </div>
  );
};

export default ReduxParent;
