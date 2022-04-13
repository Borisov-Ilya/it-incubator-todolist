import React, {useState} from 'react'
import './App.css'
import {TaskType, Todolist} from './Todolist'
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed'
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
    // tasks: Array<TaskType>
}
type TaskStateType = {
    [todolistId: string]: Array<TaskType>
}

function App() {

    const todolistId_1 = v1()
    const todolistId_2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId_1, title: 'What to learn', filter: 'all'},
        {id: todolistId_2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistId_1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistId_2]: [
            {id: v1(), title: 'Sugar', isDone: true},
            {id: v1(), title: 'Salt', isDone: true},
            {id: v1(), title: 'Oil', isDone: true},
            {id: v1(), title: 'Grecha', isDone: false},
            {id: v1(), title: 'Bitcoin', isDone: false},
            {id: v1(), title: 'Etherium', isDone: false},
        ],
    })

    function removeTask(taskId: string, todolistId: string) {
        const filteredTasks = tasks[todolistId].filter(t => t.id != taskId)
        setTasks({...tasks, [todolistId]: filteredTasks})
    }

    function addTask(title: string, todolistId: string) {
        const newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId]
                .map(t => t.id === taskId ? {...t, isDone} : t)
        })
    }

    function changeFilter(filter: FilterValuesType, todolistId: string) {
        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter} : tl))
    }

    function removeTodolist(todolistId: string) {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
        const copyTasks = {...tasks}
        delete copyTasks[todolistId]
        setTasks(copyTasks)
    }

    const todolistsComponents = todolists.map(tl => {
        let tasksForTodolist = tasks[tl.id]
        if (tl.filter === 'active') {
            tasksForTodolist = tasks[tl.id].filter(t => !t.isDone)
        }
        if (tl.filter === 'completed') {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone)
        }

        return (
            <Todolist
                key={tl.id}
                todolistId={tl.id}
                title={tl.title}
                filter={tl.filter}
                tasks={tasksForTodolist}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeStatus}
                removeTodolist={removeTodolist}
            />
        )
    })

    return (
        <div className="App">
            {todolistsComponents}
        </div>
    )
}

export default App
