import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

export function useTaskContext() {
    return useContext(TaskContext)
}

export function TasksProvider({children}) {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || (() => {
        localStorage.setItem("tasks", JSON.stringify([]))
        return []
    }))
    const [currTaskID, setCurrTaskID] = useState(tasks.length === 0 ? null : tasks[0].id)  

    function addTask() {
        setTasks(prevTasks => {
            let newTodo = {
                id: crypto.randomUUID(),
                title: "Untitled Task",
                description: "",
                isCompleted: false
            }
            let tasks = [
                newTodo,
                ...prevTasks
            ]
            setCurrTaskID(newTodo.id)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            return tasks
        })
    }

    return (
        <TaskContext.Provider value={[[tasks, currTaskID], [setCurrTaskID, addTask]]}>
            {children}
        </TaskContext.Provider>
    )
}
