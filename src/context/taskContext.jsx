import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

export function useTasks() {
    return useContext(TaskContext)
}


export function TasksProvider({children}) {

    const [tasks, setTasks] = useState([
        {
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, excepturi.",
            isCompleted: false,
        },
        {
            title: "Task 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, excepturi.",
            isCompleted: false,
        },
        {
            title: "Task 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, excepturi.",
            isCompleted: true,
        }
    ])

    return (
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    )
}
