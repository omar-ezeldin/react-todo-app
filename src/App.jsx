import './App.css'
import { Header } from './components/Header'
import { ThemeProvider, useThemeUpdate } from './context/themeContext'


function App() {
  // const toggleTheme = useThemeUpdate()

    return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App