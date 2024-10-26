import { createTheme, ThemeProvider } from "@mui/material";
import { UserPage } from "./pages/User/UserPage.tsx";

function App() {
  const theme = createTheme({
    palette: {
      background: { default: "#f4f6f8" },
      primary: { main: "#1976d2" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <UserPage />
    </ThemeProvider>
  );
}

export default App;
