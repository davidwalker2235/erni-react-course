import './App.css';
import Stack from '@mui/material/Stack';
import {ReactLogo, CounterValue, ButtonComponent} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {increaseValue, decreaseValue, incrementAsync} from "./reducers/counterReducer";
import ButtonAsyncWithValue from "./components/button-async-with-value/button-async-with-value";

function App() {
  const dispatch = useDispatch();
  const value = useSelector(store => store.counter.value)

  return (
    <div className="App">
      <Stack spacing={4}>
        <ReactLogo />
        <CounterValue value={value} color="green"/>
        <Stack spacing={2} direction="row">
          <ButtonComponent text="Increase" type="success" onClickFunc={() => dispatch(increaseValue())}/>
          <ButtonComponent text="Decrease" type="error" onClickFunc={() => dispatch(decreaseValue())}/>
          <ButtonAsyncWithValue text="Increase async with value" onClickFunc={(amount) => dispatch(incrementAsync(amount))}/>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
