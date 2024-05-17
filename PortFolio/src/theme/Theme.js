// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: '#2a1454',
      },
      secondary: {
        main: '#8750f7',
      },
      heading:{
        headinprimary: '#102039',
    },
      body:{
        body: '#dddddd',
      }
      
    },
    typography: {
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
  
      
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
