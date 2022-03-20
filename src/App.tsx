import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from 'uuid'
import {ModalWindow} from './components/ModalWindow'

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])

    const removeTask = (newId: string) => {
        let filtered = tasks.filter((el) => el.id !== newId)
        setTasks(filtered)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const tasksFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    const addTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    let prokladka = tasks
    if (filter === 'active') {
        prokladka = tasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        prokladka = tasks.filter(el => el.isDone)
    }

    return (
        <div className='App'>
            <ModalWindow name={'Window1'}>
                <>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="checkbox"/>
                </>
            </ModalWindow>

            <ModalWindow name={'Window22'}>
                <>
                    <button>xxx</button>
                    <button>xxx</button>
                    <input type="checkbox"/>
                </>
            </ModalWindow>
            {/*<Todolist*/}
            {/*    title={'What to learn'}*/}
            {/*    tasks={prokladka}*/}
            {/*    tasksFilter={tasksFilter}*/}
            {/*    removeTask={removeTask}*/}
            {/*    addTask={addTask}*/}
            {/*/>*/}
        </div>
    )
}

export default App
