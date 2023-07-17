import './App.css'
import { EditingSection } from './components/EditingSection'
import { Header } from './components/Header'
import { TaskSection } from './components/TaskSection'
import { TasksProvider } from './context/taskContext'
import { ThemeProvider } from './context/themeContext'


function App() {
    return (
    <>
      <TasksProvider>
        <ThemeProvider>
          <Header />
            <div className="container">
              <TaskSection />
              <EditingSection />
            </div>
        </ThemeProvider>
      </TasksProvider>
    </>
  )
}

export default App