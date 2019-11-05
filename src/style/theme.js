import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

/* import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif; 
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  ul {
    margin: 0;
  }
  li {
    list-style: none;
  }
` */

const theme = createMuiTheme({
	palette: {
		primary: { main: blue[900] },
  },
  /* props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  }, */
})

export default theme
