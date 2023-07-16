import './App.css'
import { Header } from './components/Header'
import { TaskSection } from './components/TaskSection'
import { TasksProvider } from './context/taskContext'
import { ThemeProvider, useThemeUpdate } from './context/themeContext'


function App() {
  // const toggleTheme = useThemeUpdate()

    return (
    <>
      <TasksProvider>
        <ThemeProvider>
          <Header />
          <TaskSection />
        </ThemeProvider>
      </TasksProvider>
    </>
  )
}

export default App