import { useSelector } from "react-redux";
import './value.css';
import {selectCounterValue} from "../../reducers/counterReducer";

const Value = () => {
  const value = useSelector(selectCounterValue);
  return (<p>{value}</p>);
}

export default Value;
