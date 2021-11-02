import { useDispatch } from "react-redux";
import './App.css';
import ReactLogo from "../../assets/icons/react-logo";
import Value from "../value/value";
import {increaseValue, decreaseValue} from "../../reducers/counterReducer";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <Value />
        <button onClick={() => dispatch(increaseValue(1))}>Increase</button>
        <button onClick={() => dispatch(decreaseValue(5))}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
