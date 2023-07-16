import { useTasks } from "../context/taskContext"
import { useTheme } from "../context/themeContext"
import { Task } from "./Task"

export function TaskSection() {
    let darkTheme = useTheme()
    let tasks = useTasks()

    let taskElements = tasks.map(task => <Task title={task.title} isCompleted={task.isCompleted} />)

    return (
        <div className={`task-section ${darkTheme ? "dark" : "light"}`}>
            <h2 className={`task-section-title ${darkTheme ? "dark" : "light"}`}>Tasks</h2>
            {taskElements}
        </div>
    )
}