import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#518f00',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#141414'
    },
    background: {
      default: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Open-sans, sans-serif'
  }
})

export default theme
