import { useDispatch } from "react-redux";
import './App.css';
import ReactLogo from "../../assets/icons/react-logo";
import Value from "../value/value";
import {increaseValue, decreaseValue, incrementAsync} from "../../reducers/counterReducer";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <Value />
        <button onClick={() => dispatch(increaseValue())}>Increase</button>
        <button onClick={() => dispatch(decreaseValue())}>Decrease</button>
        <button onClick={() => dispatch(incrementAsync(5))}>Increment Async</button>
      </header>
    </div>
  );
}

export default App;
