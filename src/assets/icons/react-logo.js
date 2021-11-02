import logo from "../images/logo.svg";
import './react-logo.css';
import {useSelector} from "react-redux";
import {selectCounterValue} from "../../reducers/counterReducer";

const ReactLogo = () => {
  const value = useSelector(selectCounterValue);

  return <img src={logo} className={value < 0 ? "App-logo-left" : "App-logo-right"}  alt="logo" />;
}

export default ReactLogo;