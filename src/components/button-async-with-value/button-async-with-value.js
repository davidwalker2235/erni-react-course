import './styles';
import Stack from "@mui/material/Stack";
import {ButtonComponent} from "../index";
import TextField from '@mui/material/TextField';
import {useState} from "react";

function ButtonAsyncWithValue(
  { text = 'Click me',
    onClickFunc = () => null,
    type
  }) {

  const [value, setValue] = useState(0)

  const handleChange = (event) => {
    setValue(parseInt(event.target.value.length ? event.target.value : '0'));
  };

  const handleClick = () => {
    onClickFunc(value);
  }

  return (
    <Stack spacing={2} direction="row">
      <ButtonComponent text={text} onClickFunc={handleClick} type={type}/>
      <TextField
        variant="filled"
        sx={{
          backgroundColor: 'white',
          color: 'red'
        }}
        id="filled-basic"
        label="Write a number"
        onChange={handleChange} />
    </Stack>
  );
}

export default ButtonAsyncWithValue;
