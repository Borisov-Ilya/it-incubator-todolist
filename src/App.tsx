import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from 'uuid'


function App() {
    let [tasks1, setTasks1] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
    ])

    const removeTask = (newId: string) => {
        let filtered = tasks1.filter((el) => el.id !== newId)
        setTasks1(filtered)
    }

    let [valueButton, setValueButton] = useState('All')

    const tasksFilter = (filterValue: string) => {
        setValueButton(filterValue)
    }

    const addTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks1([newTask, ...tasks1])
    }

    let prokladka = tasks1
    if (valueButton === 'Active') {
        prokladka = tasks1.filter(el => !el.isDone)
    }
    if (valueButton === 'Completed') {
        prokladka = tasks1.filter(el => el.isDone)
    }

    return (
        <div className='App'>
            <Todolist
                title={'What to learn'}
                tasks={prokladka}
                tasksFilter={tasksFilter}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    )
}

export default App
