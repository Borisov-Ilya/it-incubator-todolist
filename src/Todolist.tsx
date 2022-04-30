import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {FilterValuesType} from './App'
import AddItemForm from './AddItemForm'
import EditableSpan from './EditableSpan'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, id: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
    changeTodolistTitle: (title: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => props.addTask(title, props.todolistId)
    const onAllClickHandler = () => props.changeFilter('all', props.todolistId)
    const onActiveClickHandler = () => props.changeFilter('active', props.todolistId)
    const onCompletedClickHandler = () => props.changeFilter('completed', props.todolistId)
    const changeTodolistTitle = (newTitle: string) => props.changeTodolistTitle(newTitle, props.todolistId)



    return <div>
        <h3>
            <EditableSpan title={props.title} changeTitle={changeTodolistTitle}/>
            <button onClick={() => props.removeTodolist(props.todolistId)}>X</button>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.todolistId)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistId)
                    }
                    const changeTaskTitle = (newTitle: string) => {
                        props.changeTaskTitle(t.id, newTitle, props.todolistId)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
