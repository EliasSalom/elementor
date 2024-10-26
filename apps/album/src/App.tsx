import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {UserList} from "./components/UserList/UserList.tsx";

function App() {
    const theme = createTheme({
        palette: {
            background: { default: '#f4f6f8' },
            primary: { main: '#1976d2' },
        },
    });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserList/>
      </ThemeProvider>
  )
}

export default App
