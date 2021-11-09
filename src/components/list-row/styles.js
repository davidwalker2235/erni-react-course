import {styled} from "@mui/material/styles";

const useRowStyledBase = (component) => {
  const PaperStyled = styled(component)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return [PaperStyled];
};

export default useRowStyledBase;