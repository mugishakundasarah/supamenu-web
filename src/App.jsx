import { ThemeProvider } from '@mui/material'
import { createTheme } from "@mui/material/styles"
import './App.css'
import Dashboard from './pages/Dashboard'
import { orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary:orange
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dashboard/>
      </div>
    </ThemeProvider>
  )
}

export default App
