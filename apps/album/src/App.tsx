import { createTheme, ThemeProvider } from "@mui/material";
import { UserPage } from "./pages/User/UserPage.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    palette: {
      background: { default: "#f4f6f8" },
      primary: { main: "#1976d2" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" />
      <UserPage />
    </ThemeProvider>
  );
}

export default App;
