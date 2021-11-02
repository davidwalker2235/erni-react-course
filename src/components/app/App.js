import './App.css';
import ReactLogo from "../../assets/icons/react-logo";
import {useState} from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const onIncrement = () => {
    setValue(value +1)
  }

  const onDecrement = () => {
    setValue(value -1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo rightRotation={true}/>
        <p>
          {value}
        </p>
        <button onClick={onIncrement}>Increase</button>
        <button onClick={onDecrement}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
