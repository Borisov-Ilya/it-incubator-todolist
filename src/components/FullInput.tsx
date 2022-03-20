import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Button} from './Button'

type FullInputType = {
    callback: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    let [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.callback(newTitle)
        setNewTitle('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}
            />
            <Button name={'+'} callback={addTaskHandler}/>
        </div>
    )
}