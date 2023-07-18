import { createContext, useContext, useState } from "react";

const TaskContext = createContext()
const TaskAdd = createContext()
const CurrTask = createContext()

export function useTasks() {
    return useContext(TaskContext)
}

export function useTaskAdd() {
    return useContext(TaskAdd)
}



export function TasksProvider({children}) {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

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
            localStorage.setItem("tasks", JSON.stringify(tasks))
            return tasks
        })
    }

    return (
        <CurrTask.Provider value={null}>
            <TaskAdd.Provider value={addTask}>
                <TaskContext.Provider value={tasks}>
                    {children}
                </TaskContext.Provider>
            </TaskAdd.Provider>
        </CurrTask.Provider>
    )
}
