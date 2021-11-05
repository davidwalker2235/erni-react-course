import logo from '../../logo.svg';
import './react-logo.css';
import {useSelector} from "react-redux";

function ReactLogo() {
  const value = useSelector(store => store.counter.value)

  return (<img src={logo} className={`app-logo-${value < 0 ? 'left' : 'right'}`} alt="logo" />);
}

export default ReactLogo;
