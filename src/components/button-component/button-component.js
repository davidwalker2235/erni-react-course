import Button from '@mui/material/Button';
import './button-component.css';

function ButtonComponent({ text = 'Click me',
                           onClickFunc = () => null,
                         type}) {
  return (
    <Button color={type} onClick={onClickFunc} variant="contained">{text}</Button>
  );
}

export default ButtonComponent;
